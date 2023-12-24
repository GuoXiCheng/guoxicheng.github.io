<template>
    <h2>{{ word }}</h2>
    <p><strong>含义</strong> {{ meaning }}</p>
    <div v-for="item in examples" :key="item.en">
      <p>{{ item.en }}</p>
      <p>{{ item.cn }}</p>
    </div>
</template>
  
<script>
export default {
    props: {
        word: {
            type: String,
            required: true
        },
        meaning: {
            type: String,
            required: true
        },
        examples: {
            type: Array,
            required: true
        }
    }
}
</script>
  
<style>

</style>
  