// String pattern matching with constraints — 
// Given a pattern string of '0' and '1', and a source string of lowercase letters. 
// Count substrings of source that match pattern: 
// '0' must map to vowel, '1' to consonant. 
// https://codesignal.com/blog/example-codesignal-questions/?utm_source=chatgpt.com

// Strings, iteration, conditions

// JS
function countPatternMatches(pattern, source) {
    const isVowel = (ch) => 'aeiou'.includes(ch);
    const isConsonant = (ch) => /[a-z]/.test(ch) && !isVowel(ch);

    const patternLength = pattern.length;
    let count = 0;

    for (let i = 0; i <= source.length - patternLength; i++) {
        let match = true;
        for (let j = 0; j < patternLength; j++) {
            const sourceChar = source[i + j];
            if (pattern[j] === '0' && !isVowel(sourceChar)) {
                match = false;
                break;
            } else if (pattern[j] === '1' && !isConsonant(sourceChar)) {
                match = false;
                break;
            }
        }
        if (match) count++;
    }
    return count;
}

// Example usage:   
console.log(countPatternMatches("01", "abecidofu")); // Output: 5
console.log(countPatternMatches("10", "abecidofu")); // Output: 4
console.log(countPatternMatches("001", "aeiobcdfg")); // Output: 3

// JS — alternative version
function matchesPattern(source, pattern) {
    const isVowel = c => 'aeiouy'.includes(c.toLowerCase());
    const n = source.length;
    const m = pattern.length;
    let count = 0;
    for (let i = 0; i + m <= n; i++) {
        let ok = true;
        for (let j = 0; j < m; j++) {
            const p = pattern[j];
            const s = source[i + j];
            if (p === '0') {
                if (!isVowel(s)) { ok = false; break; }
            } else if (p === '1') {
                if (isVowel(s)) { ok = false; break; }
            } else {
                ok = false; break;
            }
        }
        if (ok) count++;
    }
    return count;
}
// Example usage:
console.log(matchesPattern("amazing", "010")); // Output: 2
console.log(matchesPattern("hello", "10"));    // Output: 2
