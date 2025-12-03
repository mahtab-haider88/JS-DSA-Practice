// How to start a DSA program:

// 1. Understand and restate the problem in your own words
// 2. Explore concrete Examples
// 3. Break it down to psuedocode and logical parts
// 4. Write the code and main logic
// 5. Refactor and improvize the edge cases with input and special cases

function charCount(str){
    const result = {}
for (let c of str){
    if(/^[a-zA-Z0-9]$/.test(c)){
        c = c.toLowerCase()
        console.log('c: ', c)
        console.log('result: ', result)
        console.log('resultc: ', result[c])
        result[c] = result[c] > 0 ? result[c]++ : 1
        console.log('result2: ', result)
        console.log('result2c: ', result[c])
    }
}
return result

}

// Alphabets
const response1 =  charCount("Hello")

// // special characters
// const response2 =  charCount("Hello!")

// // Capital and small cases
// const response3 =  charCount("Hello there!")

// // Numbers
// const response4 =  charCount("Hello there!, I live at 14041 Loop")

console.log('response1: ', response1)
// console.log('response2: ', response2)
// console.log('response3: ', response3)
// console.log('response4: ', response4)
