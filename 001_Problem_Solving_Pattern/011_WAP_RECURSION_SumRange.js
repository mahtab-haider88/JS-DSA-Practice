// Iterative Approach
// ------------------
// Write a function called SumRange which accepts a number and returns the sum of all numbers from 1 to that number.
// For example, SumRange(6) should return 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21
function SumRange(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(SumRange(6)); // 21

// Recursive Approach
// ------------------
// Write a function called SumRangeRecursive which accepts a number and returns the sum of all numbers from 1 to that number.
// For example, SumRangeRecursive(6) should return 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21
function SumRangeRecursive(num) {
    if (num === 1) return 1;
    return num + SumRangeRecursive(num - 1);
}

console.log(SumRangeRecursive(6)); // 21
