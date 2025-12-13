// Sliding‑window: Maximum sum subarray of size k — 
// Given an array of integers and integer k, 
// return maximum sum of any contiguous subarray of size k.
// https://www.interviewcake.com/concept/sliding-window?course=fc1&section=array-and-string-manipulation
// https://leetcode.com/problems/maximum-average-subarray-i/

// Arrays, sliding window

//JS
function maxSubarraySumK(nums, k) {
    // nums: array of ints, k: integer
    // return maximum sum of any contiguous subarray of size k
    let n = nums.length;
    if (k > n) return null;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    let maxSum = windowSum;
    for (let i = k; i < n; i++) {
        windowSum += nums[i] - nums[i - k];
        if (windowSum > maxSum) maxSum = windowSum;
    }
    return maxSum;
}
// Example usage:
console.log(maxSubarraySumK([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSubarraySumK([2, 3, 4, 1, 5], 2));    // Output: 7

// JS — alternative version
function maxSumSubarrayOfSizeK(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // add the next element

        // slide the window, we don't need to slide if we've not hit the required window size of 'k'
        if (windowEnd >= k - 1) {
            maxSum = Math.max(maxSum, windowSum); // update max sum if needed
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart++; // slide the window ahead
        }
    }

    return maxSum;
}

// Example usage:
console.log(maxSumSubarrayOfSizeK([2,1,5,1,3,2], 3)); // Output: 9
console.log(maxSumSubarrayOfSizeK([2,3,4,1,5], 2));   // Output: 7
