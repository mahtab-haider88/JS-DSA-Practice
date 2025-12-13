// String / substring + palindrome or 
// longest substring without repeating characters — 
// Classic string sliding window / hash map.    
// https://leetcode.com/problems/longest-palindromic-substring/

// Strings, sliding window, hash map
// JS
function lengthOfLongestUniqueSubstr(s) {
    const seen = new Map();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        if (seen.has(c) && seen.get(c) >= left) {
            left = seen.get(c) + 1;
        }
        seen.set(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// Example usage:
console.log(lengthOfLongestUniqueSubstr("abcabcbb")); // Output: 3
console.log(lengthOfLongestUniqueSubstr("bbbbb"));    // Output: 1  

// JS
function longestPalindromicSubstring(s) {
    if (s.length < 1) return "";
    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // odd length
        const len2 = expandAroundCenter(i, i + 1); // even length
        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}
// Example usage:
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd"));  // Output: "bb"
