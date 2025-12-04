function findLongestUniqueChars(s) {
  let windowStart = 0;
  let maxLength = 0;
  const charIndexMap = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (charIndexMap.has(rightChar)) {
      // Move the start of the window to the right of the last occurrence of rightChar
      windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
    }

    charIndexMap.set(rightChar, windowEnd);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(findLongestUniqueChars("abcabcbb")); // 3
console.log(findLongestUniqueChars("bbbbb"));    // 1
console.log(findLongestUniqueChars("pwwkew"));   // 3
console.log(findLongestUniqueChars(""));         // 0
console.log(findLongestUniqueChars("dvdf"));     // 3