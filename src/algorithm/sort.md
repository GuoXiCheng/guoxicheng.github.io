# 排序算法

## 快速排序

### 核心思想

首先检查数组长度，如果数组长度小于等于1，那么直接返回，不需要排序。否则，选择数组中间的一个元素作为基准值，遍历数组，将小于基准值的元素放在左边，大于基准值的元素放在右边，然后递归地对左右两边的数组进行排序。

```ts
// npm run code src/code/algorithm/quick-sort.ts

<!-- @include: @src/code/algorithm/quick-sort.ts -->
```

## 归并排序

### 核心思想

首先检查数组长度，如果数组长度小于等于1，那么直接返回，不需要排序。否则，将数组分成两半，并递归地调用自身来排序这两部分，然后将两个有序的数组合并成一个有序的数组。

```ts
// npm run code src/code/algorithm/merge-sort.ts

<!-- @include: @src/code/algorithm/merge-sort.ts -->
```

## 堆排序

### 核心思想

```ts
// npm run code src/code/algorithm/heapsort.ts

<!-- @include: @src/code/algorithm/heapsort.ts -->
```

## 冒泡排序

### 核心思想

遍历数组，比较相邻的两个元素，如果前一个元素大于后一个元素，那么交换这两个元素的位置，然后继续遍历，直到没有元素需要交换。

```ts
// npm run code src/code/algorithm/bubble-sort.ts

<!-- @include: @src/code/algorithm/bubble-sort.ts -->
```

## 选择排序

### 核心思想

首先在未排序序列中找到最小（或最大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（或最大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

```ts
// npm run code src/code/algorithm/selection-sort.ts

<!-- @include: @src/code/algorithm/selection-sort.ts -->
```

## 希尔排序

### 核心思想

希尔排序首先设定一个“间隔”，开始时为数组长度的一半，对每个间隔内的元素进行插入排序，然后将间隔减半，再进行插入排序，直到间隔为1，此时的插入排序已经是对整个数组进行排序了。

```ts
// npm run code src/code/algorithm/shell-sort.ts

<!-- @include: @src/code/algorithm/shell-sort.ts -->
```