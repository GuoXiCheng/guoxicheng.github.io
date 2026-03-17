<template>
  <section class="random-page">
    <div class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Random Generator</p>
        <h1>随机数生成器</h1>
        <p class="description">
          输入最小值、最大值和生成行数后，即可批量生成随机数据。点击任意表格行，会从该行开始依次朗读每个单元格，并自动继续朗读后续行。
        </p>
      </div>

      <div class="panel">
        <div class="input-grid">
          <label class="field">
            <span>最小值</span>
            <input v-model="minInput" type="number" inputmode="numeric" step="1" placeholder="例如 1" />
          </label>

          <label class="field">
            <span>最大值</span>
            <input v-model="maxInput" type="number" inputmode="numeric" step="1" placeholder="例如 100" />
          </label>

          <label class="field">
            <span>生成行数</span>
            <input v-model="rowCountInput" type="number" inputmode="numeric" step="1" min="1" placeholder="默认 100" />
          </label>
        </div>

        <div class="actions">
          <button class="primary-button" :disabled="Boolean(inputError)" @click="generateRows">生成数据</button>
          <button class="secondary-button" :disabled="!canPlay" @click="playSpeech">播放</button>
          <button class="secondary-button" :disabled="!canPause" @click="pauseSpeech">暂停</button>
        </div>

        <label class="rate-control" for="speech-rate">
          <div class="rate-header">
            <span>朗读语速</span>
            <strong>{{ speechRate.toFixed(1) }}x</strong>
          </div>
          <input id="speech-rate" v-model.number="speechRate" type="range" min="0.5" max="2" step="0.1" />
        </label>

        <div class="status-stack">
          <p class="status-line" :class="{ warning: Boolean(inputError) }" aria-live="polite">
            {{ inputError || playbackStatusText }}
          </p>
          <p class="status-note">
            若最小值大于最大值，生成时会自动交换范围。
            <template v-if="!speechSupported">当前浏览器不支持语音朗读功能。</template>
          </p>
        </div>
      </div>
    </div>

    <div class="summary-grid">
      <article class="summary-card">
        <span class="summary-label">当前区间</span>
        <strong>{{ resolvedRangeText }}</strong>
      </article>
      <article class="summary-card">
        <span class="summary-label">表格行数</span>
        <strong>{{ dataRows.length }} 行</strong>
      </article>
      <article class="summary-card">
        <span class="summary-label">朗读定位</span>
        <strong>{{ readingFocusText }}</strong>
      </article>
    </div>

    <div class="table-card">
      <div v-if="dataRows.length" class="table-wrapper">
        <table class="result-table">
          <caption class="sr-only">
            随机数结果表。点击任意一行可从该行开始朗读每个单元格。
          </caption>
          <thead>
            <tr>
              <th scope="col">序号</th>
              <th scope="col">随机数1</th>
              <th scope="col">随机数2</th>
              <th scope="col">随机数3</th>
              <th scope="col">平均值</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in dataRows"
              :key="row.order"
              :class="{
                'is-active': currentRowIndex === rowIndex,
                'is-paused': isPaused && currentRowIndex === rowIndex,
              }"
              tabindex="0"
              :aria-label="`从第 ${row.order} 行开始朗读`"
              @click="startReadingFromRow(rowIndex)"
              @keydown.enter.prevent="startReadingFromRow(rowIndex)"
              @keydown.space.prevent="startReadingFromRow(rowIndex)"
            >
              <td class="order-cell">
                <span>{{ row.order }}</span>
                <span v-if="currentRowIndex === rowIndex" class="row-tag">
                  {{ isPaused ? "暂停中" : "朗读中" }}
                </span>
              </td>
              <td>{{ row.value1 }}</td>
              <td>{{ row.value2 }}</td>
              <td>{{ row.value3 }}</td>
              <td class="average-cell">{{ row.average }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="empty-state">
        <h2>还没有生成数据</h2>
        <p>默认生成行数为 100。输入范围后点击“生成数据”，再点击任意一行即可开始朗读。</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

interface RandomRow {
  order: number;
  value1: number;
  value2: number;
  value3: number;
  average: number;
}

const columnLabels = ["序号", "随机数1", "随机数2", "随机数3", "平均值"] as const;

const minInput = ref("1");
const maxInput = ref("100");
const rowCountInput = ref("100");
const speechRate = ref(1);

const dataRows = ref<RandomRow[]>([]);
const currentRowIndex = ref<number | null>(null);
const currentCellIndex = ref(0);
const isPlaying = ref(false);
const isPaused = ref(false);
const speechSupported = ref(false);
const preferredVoice = ref<SpeechSynthesisVoice | null>(null);
const playbackToken = ref(0);

let detachVoicesChanged: (() => void) | null = null;

function parseIntegerInput(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return null;
  }

  return Math.trunc(parsed);
}

const parsedMin = computed(() => parseIntegerInput(minInput.value));
const parsedMax = computed(() => parseIntegerInput(maxInput.value));
const parsedRowCount = computed(() => parseIntegerInput(rowCountInput.value));

const normalizedBounds = computed(() => {
  if (parsedMin.value === null || parsedMax.value === null) {
    return null;
  }

  return {
    min: Math.min(parsedMin.value, parsedMax.value),
    max: Math.max(parsedMin.value, parsedMax.value),
  };
});

const inputError = computed(() => {
  if (parsedMin.value === null) {
    return "请输入有效的最小值。";
  }

  if (parsedMax.value === null) {
    return "请输入有效的最大值。";
  }

  if (parsedRowCount.value === null || parsedRowCount.value <= 0) {
    return "生成行数必须大于 0。";
  }

  return "";
});

const canPlay = computed(() => {
  return speechSupported.value && dataRows.value.length > 0 && (isPaused.value || !isPlaying.value);
});

const canPause = computed(() => {
  return speechSupported.value && isPlaying.value && !isPaused.value;
});

const resolvedRangeText = computed(() => {
  if (!normalizedBounds.value) {
    return "--";
  }

  return `${normalizedBounds.value.min} ~ ${normalizedBounds.value.max}`;
});

const readingFocusText = computed(() => {
  if (currentRowIndex.value === null) {
    return "未开始";
  }

  const currentLabel = columnLabels[currentCellIndex.value] ?? columnLabels[0];
  return `第 ${currentRowIndex.value + 1} 行 / ${currentLabel}`;
});

const playbackStatusText = computed(() => {
  if (!speechSupported.value) {
    return "当前浏览器不支持语音朗读，请使用支持 SpeechSynthesis 的浏览器。";
  }

  if (!dataRows.value.length) {
    return "请先生成数据，再点击任意一行开始朗读。";
  }

  if (isPaused.value && currentRowIndex.value !== null) {
    return `朗读已暂停，当前停留在第 ${currentRowIndex.value + 1} 行的 ${columnLabels[currentCellIndex.value]}。`;
  }

  if (isPlaying.value && currentRowIndex.value !== null) {
    return `正在朗读第 ${currentRowIndex.value + 1} 行的 ${columnLabels[currentCellIndex.value]}。`;
  }

  if (currentRowIndex.value !== null) {
    return `已定位到第 ${currentRowIndex.value + 1} 行，点击播放可从当前进度继续。`;
  }

  return "点击任意表格行，即可从该行开始朗读。";
});

function getSpeechEngine(): SpeechSynthesis | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  return window.speechSynthesis;
}

function updatePreferredVoice() {
  const speechEngine = getSpeechEngine();

  if (!speechEngine) {
    preferredVoice.value = null;
    return;
  }

  const voices = speechEngine.getVoices();

  preferredVoice.value =
    voices.find((voice) => /^zh/i.test(voice.lang) || /Chinese|Mandarin|中文|普通话/i.test(voice.name)) ??
    voices[0] ??
    null;
}

function createRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetPlaybackPosition() {
  currentRowIndex.value = null;
  currentCellIndex.value = 0;
}

function stopPlayback(clearPosition = true) {
  playbackToken.value += 1;

  const speechEngine = getSpeechEngine();
  speechEngine?.cancel();

  isPlaying.value = false;
  isPaused.value = false;

  if (clearPosition) {
    resetPlaybackPosition();
  }
}

function completePlayback() {
  isPlaying.value = false;
  isPaused.value = false;
  resetPlaybackPosition();
}

function getCellSpeechText(row: RandomRow, cellIndex: number) {
  const texts = [
    `第 ${row.order} 行，序号 ${row.order}`,
    `第 ${row.order} 行，随机数一是 ${row.value1}`,
    `第 ${row.order} 行，随机数二是 ${row.value2}`,
    `第 ${row.order} 行，随机数三是 ${row.value3}`,
    `第 ${row.order} 行，平均值是 ${row.average}`,
  ];

  return texts[cellIndex] ?? texts[0];
}

function speakCurrentCell(token: number) {
  if (!speechSupported.value || token !== playbackToken.value || currentRowIndex.value === null) {
    return;
  }

  const currentRow = dataRows.value[currentRowIndex.value];
  const speechEngine = getSpeechEngine();

  if (!currentRow || !speechEngine || typeof SpeechSynthesisUtterance === "undefined") {
    completePlayback();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(getCellSpeechText(currentRow, currentCellIndex.value));
  utterance.lang = preferredVoice.value?.lang ?? "zh-CN";
  utterance.rate = speechRate.value;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (preferredVoice.value) {
    utterance.voice = preferredVoice.value;
  }

  utterance.onstart = () => {
    if (token !== playbackToken.value) {
      return;
    }

    isPlaying.value = true;
    isPaused.value = false;
  };

  utterance.onend = () => {
    if (token !== playbackToken.value || currentRowIndex.value === null) {
      return;
    }

    if (currentCellIndex.value < columnLabels.length - 1) {
      currentCellIndex.value += 1;
      speakCurrentCell(token);
      return;
    }

    if (currentRowIndex.value < dataRows.value.length - 1) {
      currentRowIndex.value += 1;
      currentCellIndex.value = 0;
      speakCurrentCell(token);
      return;
    }

    completePlayback();
  };

  utterance.onerror = () => {
    if (token !== playbackToken.value) {
      return;
    }

    isPlaying.value = false;
    isPaused.value = false;
  };

  speechEngine.speak(utterance);
}

function startReadingFromRow(rowIndex: number) {
  if (!speechSupported.value || !dataRows.value.length) {
    return;
  }

  stopPlayback(false);
  currentRowIndex.value = rowIndex;
  currentCellIndex.value = 0;
  isPlaying.value = true;
  isPaused.value = false;

  speakCurrentCell(playbackToken.value);
}

function playSpeech() {
  if (!speechSupported.value || !dataRows.value.length) {
    return;
  }

  if (isPlaying.value && !isPaused.value) {
    return;
  }

  const speechEngine = getSpeechEngine();

  if (!speechEngine) {
    return;
  }

  if (speechEngine.paused) {
    speechEngine.resume();
    isPlaying.value = true;
    isPaused.value = false;
    return;
  }

  if (currentRowIndex.value === null) {
    startReadingFromRow(0);
    return;
  }

  stopPlayback(false);
  isPlaying.value = true;
  speakCurrentCell(playbackToken.value);
}

function pauseSpeech() {
  const speechEngine = getSpeechEngine();

  if (!speechEngine || !speechEngine.speaking || speechEngine.paused) {
    return;
  }

  speechEngine.pause();
  isPlaying.value = false;
  isPaused.value = true;
}

function generateRows() {
  if (inputError.value || !normalizedBounds.value || parsedRowCount.value === null) {
    return;
  }

  stopPlayback(true);

  dataRows.value = Array.from({ length: parsedRowCount.value }, (_, index) => {
    const value1 = createRandomNumber(normalizedBounds.value!.min, normalizedBounds.value!.max);
    const value2 = createRandomNumber(normalizedBounds.value!.min, normalizedBounds.value!.max);
    const value3 = createRandomNumber(normalizedBounds.value!.min, normalizedBounds.value!.max);

    return {
      order: index + 1,
      value1,
      value2,
      value3,
      average: Math.round((value1 + value2 + value3) / 3),
    };
  });
}

onMounted(() => {
  if (typeof window === "undefined" || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }

  const speechEngine = getSpeechEngine();

  if (!speechEngine) {
    return;
  }

  speechSupported.value = true;
  updatePreferredVoice();

  const handleVoicesChanged = () => {
    updatePreferredVoice();
  };

  if (typeof speechEngine.addEventListener === "function") {
    speechEngine.addEventListener("voiceschanged", handleVoicesChanged);
    detachVoicesChanged = () => speechEngine.removeEventListener("voiceschanged", handleVoicesChanged);
  } else {
    speechEngine.onvoiceschanged = handleVoicesChanged;
    detachVoicesChanged = () => {
      speechEngine.onvoiceschanged = null;
    };
  }
});

onBeforeUnmount(() => {
  detachVoicesChanged?.();
  stopPlayback(true);
});
</script>

<style scoped>
.random-page {
  --ink: #162033;
  --muted: #536179;
  --paper: rgba(255, 255, 255, 0.88);
  --paper-strong: #ffffff;
  --border: rgba(22, 32, 51, 0.12);
  --accent: #ff7a18;
  --accent-strong: #ff5b2e;
  --highlight: #0d9488;
  display: grid;
  gap: 1.25rem;
  color: var(--ink);
}

.hero-card {
  position: relative;
  display: grid;
  gap: 1.5rem;
  overflow: hidden;
  padding: clamp(1.25rem, 2vw + 0.75rem, 2rem);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  background:
    radial-gradient(circle at top left, rgba(255, 183, 77, 0.45), transparent 32%),
    radial-gradient(circle at bottom right, rgba(13, 148, 136, 0.18), transparent 28%),
    linear-gradient(135deg, #fff8ec 0%, #f5fbff 100%);
  box-shadow: 0 18px 48px rgba(22, 32, 51, 0.08);
}

.hero-card::after {
  content: "";
  position: absolute;
  inset: auto -3rem -3rem auto;
  width: 12rem;
  height: 12rem;
  border-radius: 999px;
  background: rgba(255, 122, 24, 0.08);
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--highlight);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.08;
}

.description {
  max-width: 38rem;
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted);
}

.panel {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
  padding: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 24px;
  background: var(--paper);
  backdrop-filter: blur(12px);
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
}

.field {
  display: grid;
  gap: 0.45rem;
}

.field span {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--muted);
}

.field input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  color: var(--ink);
  font: inherit;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.field input:focus {
  outline: none;
  border-color: rgba(255, 122, 24, 0.65);
  box-shadow: 0 0 0 4px rgba(255, 122, 24, 0.14);
  transform: translateY(-1px);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.primary-button,
.secondary-button {
  min-width: 7rem;
  padding: 0.85rem 1.2rem;
  border: 0;
  border-radius: 999px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}

.primary-button {
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  box-shadow: 0 12px 26px rgba(255, 122, 24, 0.28);
}

.secondary-button {
  color: var(--ink);
  background: #fff;
  border: 1px solid var(--border);
  box-shadow: 0 10px 20px rgba(22, 32, 51, 0.06);
}

.primary-button:not(:disabled):hover,
.secondary-button:not(:disabled):hover {
  transform: translateY(-1px);
}

.primary-button:disabled,
.secondary-button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}

.rate-control {
  display: grid;
  gap: 0.65rem;
}

.rate-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 600;
}

.rate-control input[type="range"] {
  width: 100%;
  accent-color: var(--highlight);
}

.status-stack {
  display: grid;
  gap: 0.35rem;
}

.status-line {
  margin: 0;
  font-weight: 700;
}

.status-line.warning {
  color: #b45309;
}

.status-note {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--muted);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.summary-card {
  display: grid;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--paper-strong);
  box-shadow: 0 12px 30px rgba(22, 32, 51, 0.05);
}

.summary-label {
  font-size: 0.88rem;
  color: var(--muted);
}

.summary-card strong {
  font-size: 1.05rem;
}

.table-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 28px;
  background: var(--paper-strong);
  box-shadow: 0 20px 45px rgba(22, 32, 51, 0.06);
}

.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.result-table {
  width: 100%;
  min-width: 760px;
  border-collapse: separate;
  border-spacing: 0;
}

.result-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 1rem 1.1rem;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, #fffdf7 0%, #fff5e7 100%);
  text-align: left;
  font-size: 0.95rem;
}

.result-table tbody td {
  padding: 1rem 1.1rem;
  border-bottom: 1px solid rgba(22, 32, 51, 0.08);
  font-variant-numeric: tabular-nums;
}

.result-table tbody tr:last-child td {
  border-bottom: 0;
}

.result-table tbody tr {
  cursor: pointer;
  transition: background 0.2s ease;
}

.result-table tbody tr:hover {
  background: rgba(255, 122, 24, 0.08);
}

.result-table tbody tr:focus-visible {
  outline: 2px solid rgba(13, 148, 136, 0.65);
  outline-offset: -2px;
  background: rgba(13, 148, 136, 0.08);
}

.result-table tbody tr.is-active {
  background: linear-gradient(90deg, rgba(255, 122, 24, 0.12), rgba(13, 148, 136, 0.08));
}

.result-table tbody tr.is-paused {
  background: linear-gradient(90deg, rgba(245, 158, 11, 0.16), rgba(255, 122, 24, 0.06));
}

.order-cell {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.row-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(13, 148, 136, 0.16);
  color: #0f766e;
  font-size: 0.78rem;
  font-weight: 700;
}

.is-paused .row-tag {
  background: rgba(245, 158, 11, 0.16);
  color: #b45309;
}

.average-cell {
  font-weight: 700;
  color: #0f766e;
}

.empty-state {
  display: grid;
  gap: 0.7rem;
  padding: clamp(2rem, 6vw, 4rem) 1.5rem;
  background: linear-gradient(180deg, #fffdf9 0%, #f6fbff 100%);
  text-align: center;
}

.empty-state h2 {
  margin: 0;
  font-size: 1.35rem;
}

.empty-state p {
  max-width: 32rem;
  margin: 0 auto;
  line-height: 1.7;
  color: var(--muted);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 960px) {
  .hero-card {
    grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
    align-items: start;
  }
}

@media (max-width: 900px) {
  .input-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .random-page {
    gap: 1rem;
  }

  .hero-card,
  .table-card {
    border-radius: 22px;
  }

  .actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }

  .result-table thead th,
  .result-table tbody td {
    padding: 0.85rem 0.8rem;
  }
}
</style>
