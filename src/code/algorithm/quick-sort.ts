export {};

function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 示例
const array = [3, 6, 8, 10, 1, 2, 1];
console.log("Original array:", array);
const sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);
