// Largest Square in Histogram — 
// Given histogram heights, find area of largest square (width = height) 
// that fits under histogram. Variation of largest rectangle in histogram. 
// (Reported by candidate) (LeetCode)
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Stacks, arrays
// JS
// JS
function largestSquareUnderHistogram(heights) {
    const n = heights.length;
    const stack = [];
    let maxSquare = 0;
    for (let i = 0; i <= n; i++) {
        const h = (i === n ? 0 : heights[i]);
        while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const side = Math.min(height, width);
            maxSquare = Math.max(maxSquare, side * side);
        }
        stack.push(i);
    }
    return maxSquare;
}
// Example usage:
console.log(largestSquareUnderHistogram([2,1,5,6,2,3])); // Output: 4
console.log(largestSquareUnderHistogram([4,4,4,4]));    // Output: 16

// JS — alternative version
function largestSquareInHistogram(heights) {
    const stack = [];
    let maxSquareArea = 0;
    heights.push(0); // Sentinel to pop all remaining bars

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            const side = Math.min(height, width);
            maxSquareArea = Math.max(maxSquareArea, side * side);
        }
        stack.push(i);
    }

    return maxSquareArea;
}
// Example usage:
console.log(largestSquareInHistogram([2,1,5,6,2,3])); // Output: 4
console.log(largestSquareInHistogram([4,4,4,4]));    // Output: 16