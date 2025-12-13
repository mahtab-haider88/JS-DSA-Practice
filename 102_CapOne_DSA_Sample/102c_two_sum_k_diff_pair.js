// Two-sum / k‑diff pairs — Given array of integers and an integer k, 
// count unique pairs (i, j) such that abs(nums[i] − nums[j]) = k.
// https://leetcode.com/problems/k-diff-pairs-in-an-array/

// Arrays, hash-tables/sets
// JS
// JS — classic Two Sum (return indices or bool)
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const want = target - nums[i];
        if (map.has(want)) {
            return [map.get(want), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

// JS — k-diff pairs count
function findPairs(nums, k) {
    const numSet = new Set();
    const pairSet = new Set();
    for (const num of nums) {
        const complement1 = num + k;
        const complement2 = num - k;
        if (numSet.has(complement1)) {
            const pair = [Math.min(num, complement1), Math.max(num, complement1)].toString();
            pairSet.add(pair);
            }   
        if (numSet.has(complement2)) {
            const pair = [Math.min(num, complement2), Math.max(num, complement2)].toString();
            pairSet.add(pair);
        }
        numSet.add(num);
    }
    return pairSet.size;
}
// Example usage:
console.log(findPairs([3, 1, 4, 1, 5], 2)); // Output: 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // Output: 4


