export { };

function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // 交换元素
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

// 示例
const array = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
