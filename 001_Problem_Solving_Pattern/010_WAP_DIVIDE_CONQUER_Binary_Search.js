// Binary Search Pattern O(log n)
const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // -1
console.log(binarySearch([], 1)); // -1
console.log(binarySearch([2, 4, 6, 8, 10], 6)); // 2
console.log(binarySearch([2, 4, 6, 8, 10], 2)); // 0
console.log(binarySearch([2, 4, 6, 8, 10], 10)); // 4       