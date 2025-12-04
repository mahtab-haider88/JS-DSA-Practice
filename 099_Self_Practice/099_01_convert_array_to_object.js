
const arrayToObject = (arr) => {
    const obj = {}; 
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i]; 
    }
    return obj; 
};

const myArray = ['apple', 'banana', 'cherry'];
const myObject = arrayToObject(myArray);
console.log(myObject); 
// Output: { '0': 'apple', '1': 'banana', '2': 'cherry' }


const arrayToObjectsWithCharCount = (arr) => {
    const obj = {}; 
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (obj[char]) {
            obj[char] += 1; 
        } else {
            obj[char] = 1; 
        }
    }
    return obj; 
};

const charArray = ['a', 'b', 'a', 'c', 'b', 'a'];
const charFrequencyObject = arrayToObjectsWithCharCount(charArray);
console.log(charFrequencyObject); 
// Output: { 'a': 3, 'b': 2, 'c': 1 }       
