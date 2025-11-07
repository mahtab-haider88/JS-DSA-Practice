// Iterative Approach
// ------------------
// Write a function called factorial which accepts a number and returns the factorial of that number.
// For example, factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 = 120
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i; 
    }  
    return total; 
}
console.log(factorial(5)); // 120

// Recursive Approach
// ------------------
// Write a function called factorialRecursive which accepts a number and returns the factorial of that number.
// For example, factorialRecursive(5) should return 120 because 5 * 4 * 3 * 2 * 1 = 120
function factorialRecursive(num) {
    if(num ===1 ) return 1;
    return num * factorialRecursive(num -1);
}  
console.log(factorialRecursive(5)); // 120

