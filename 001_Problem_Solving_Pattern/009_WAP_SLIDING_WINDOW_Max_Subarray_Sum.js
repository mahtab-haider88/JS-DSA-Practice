function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Calculate the sum of the first 'num' elements
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Slide the window over the array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1));          // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));       // 13
console.log(maxSubarraySum([], 4));                     // null 