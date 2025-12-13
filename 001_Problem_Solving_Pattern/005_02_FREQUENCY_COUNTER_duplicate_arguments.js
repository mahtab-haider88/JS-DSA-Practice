
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Frequency Counter Solution
function areThereDuplicates() {
  const freq = {};

  for (let i = 0; i < arguments.length; i++) {
    let val = arguments[i];

    if (freq[val]) return true; // duplicate found
    freq[val] = 1;
  }

  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Multiple Pointers Solution
function areThereDuplicatesTwoPointers(...args) {
  // Sort the arguments
  args.sort((a, b) => (a > b ? 1 : -1));

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true; // duplicate found
    }
    start++;
    next++;
  }

  return false;
}
console.log(areThereDuplicatesTwoPointers(1, 2, 3)); // false
console.log(areThereDuplicatesTwoPointers(1, 2, 2)); // true 
console.log(areThereDuplicatesTwoPointers('a', 'b', 'c', 'a')); // true