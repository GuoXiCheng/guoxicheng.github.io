export { };

function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 交换元素
        }
    }
    return arr;
}

// 示例
const array = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
