const anagram = (str1, str2) => {
  // Check if lengths are different
  // If lengths differ, they cannot be anagrams
  if (str1.length !== str2.length) return false;

  // Prepare an object with character counts from str1
  const charCount = {};
  for (let char of str1) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  // Decrease the count based on str2

  // if str2 has a char not in str1 or count goes below zero, return false
  for (let char of str2) {
    if ((!charCount[char])) {
      return false; // Character not found or count is zero
    }
    charCount[char]--;
  }

  return true;

  // If all counts match, return true

}
console.log(anagram("cinema", "iceman"));