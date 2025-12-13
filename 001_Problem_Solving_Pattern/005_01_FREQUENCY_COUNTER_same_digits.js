// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    let num1Count = {}
    let num2Count = {}
    while (num1 > 0) {
        let digit = num1 % 10
        num1Count[digit] = (num1Count[digit] || 0) + 1
        num1 = Math.floor(num1 / 10)
    }
    console.log('num1Count: ', num1Count)
    console.log('num1Count.keys: ', num1Count.keys)
    while (num2 > 0) {
        let digit = num2 % 10
        num2Count[digit] = (num2Count[digit] || 0) + 1
        num2 = Math.floor(num2 / 10)
    }
    console.log('num2Count: ', num2Count)
    console.log('num2Count.keys: ', num2Count.keys)

    if (Object.keys(num1Count).length !== Object.keys(num2Count).length) return false

    for (let key in num1Count) {
        if (num1Count[key] !== num2Count[key]) return false
    }
    return true
}
