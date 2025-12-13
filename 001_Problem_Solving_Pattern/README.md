# js-algorithms-and-data-structures-masterclass
Javascript DSA programs 

# How to start a DSA program:

1. Understand and restate the problem in your own words
2. Explore concrete Examples
3. Break it down to psuedocode and logical parts
4. Write the code and main logic
5. Refactor and improvize the edge cases with input and special cases

# There are two approaches to solve problems

1. Iterative Approach
2. Recursive Approach

# Dynamic Programming
- Coming up with optimal solutions
- It has two important terms
    1. Overlapping Subproblems
        a. Problem can be broken in subproblems which are repeated in nature
        b. Ex. Fibonacci sequence
    2. Optimal Substructure
        a. 
1. Memoization: Storing the result of expensive function calls and returning cached result when the same input occurs
2. Tabulation: 


# Problem Solving Patterns — Quick Index

This folder contains small example programs demonstrating common problem-solving patterns used in algorithm and data-structure interviews. Each file contains a short implementation and a few example calls you can run with Node.

## Files and summaries

- `001_WAP_CharCount_InString.js` — Count alphanumeric characters in a string (case-insensitive). Uses a regex to filter characters and an object frequency map. Time: O(n).

- `002_WAP_FREQEUNCY_COUNTER_Same_Array_BigOn2.js` — Naive O(n^2) solution for the "same" problem (check whether every value in one array has its square in the other). Uses nested loops and `splice` to remove matches.

- `003_WAP_FREQUENCY_COUNTER_Same_Array_BigOn.js` — Optimized O(n) frequency-counter solution for the same problem. Builds two frequency maps and compares counts.

- `004_WAP_FREQUENCY_COUNTER_Anagram.js` — Check whether two strings are anagrams using a character frequency counter. O(n) time.

- `005_WAP_MULTIPLE_POINTER_SumZero_BigON2.js` — Brute-force O(n^2) approach to find the first pair summing to zero in a sorted array (nested loops). Included as a baseline.

- `006_01_FREQUENCY_COUNTER_same_digits.js` — `sameFrequency`: Determine if two positive integers have the same digit frequency. Uses digit extraction and counting. O(n) time where n is number of digits.

- `006_02_FREQUENCY_COUNTER_duplicate_arguments.js` — `areThereDuplicates`: two implementations (frequency-counter with `arguments`, and multiple-pointers after sorting) to detect duplicates among function arguments.

- `006_WAP_MULTIPLE_POINTER_SumZero_BigOn.js` — Efficient multiple-pointers (two-pointer) O(n) solution to find a pair that sums to zero in a sorted array.

- `007_WAP_MULTIPLE_POINTER_CountUniqueValue.js` — Count unique values (frequency-counter and multiple-pointers variants). Includes an in-place two-pointer technique for O(1) extra space.

- `008_WAP_SLIDING_WINDOW_LongestUniqueChars.js` — Sliding-window approach to find the length of the longest substring with unique characters. Uses a Map of last-seen indices. O(n) time.

- `009_WAP_SLIDING_WINDOW_Max_Subarray_Sum.js` — Max subarray sum of fixed length using the sliding-window technique. O(n) time and O(1) extra space.

- `010_WAP_DIVIDE_CONQUER_Binary_Search.js` — Iterative binary search (divide and conquer) returning index or -1. O(log n) time.

- `011_WAP_RECURSION_SumRange.js` — Sum range examples (iterative and recursive) demonstrating recursion base case and stack behavior.

- `012_WAP_RECURSION_Factorial.js` — Factorial examples (iterative and recursive), classic recursion demonstration.

## How to run

From the repository root (or this folder) you can run any example with Node. For example:

```bash
# run the anagram example
node 004_WAP_FREQUENCY_COUNTER_Anagram.js

# run the sliding window example
node 008_WAP_SLIDING_WINDOW_LongestUniqueChars.js
```

## Notes & suggestions

- Most files include both naive and optimized variants — useful for learning trade-offs.
- Many examples print results to the console; they are suitable to run directly with Node.
- Consider adding small unit tests or a single test runner that imports each file and summarizes outputs.

If you want, I can add a formatted table-of-contents, a test runner script, or convert examples into proper unit tests. Tell me which you'd prefer.

## TODO:
- arrays, strings, hash-tables/maps, trees/graphs, maybe heaps/priority-queues.



