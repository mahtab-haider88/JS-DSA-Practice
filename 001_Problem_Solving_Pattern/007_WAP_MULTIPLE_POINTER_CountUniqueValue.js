// https://medium.com/@haider.mtech2011/counting-unique-values-in-arrays-a-deep-dive-for-coding-interview-success-dsa-blog-c555f6a0fb8e

// Frequency Counter Pattern O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  const valCount = {};
  for (let val of arr) {
    valCount[val] = valCount[val] + 1 || 1;
  }
  console.log(valCount);
  return Object.keys(valCount).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2

// Multiple Pointers Pattern O(n)
function countUniqueValuesTwoPointers(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuesTwoPointers([1, 1, 1, 1, 1, 2])); // 2 