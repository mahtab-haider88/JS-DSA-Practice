function anagram(str1, str2) {
  // Check if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  // Count characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease count for characters in str2
  for (let char of str2) {
    // can't find the char or char count is zero
    if (!charCount[char]) {
      return false; // Character not found or count is zero
    }
    charCount[char]--;
  }

  return true; // All counts matched
}

console.log(anagram("cinema", "iceman"));