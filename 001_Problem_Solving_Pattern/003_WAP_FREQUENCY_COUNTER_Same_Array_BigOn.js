// Frequency Counter Pattern O(n)
// ------------------
// Write a function called same_array which accepts two arrays.
// The function should return true if every value in the first array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// For example, 
// same_array([1,2,3], [4,1,9]) should return true because 1^2 = 1, 2^2 = 4, 3^2 = 9
// same_array([1,2,3], [1,9]) should return false because the frequency of 4 is missing
// same_array([1,2,1], [4,4,1]) should return false because the frequency of 1s do not match
function same_array(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('Length Mismatch')
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}   

    for(let val of arr1){
        freqCounter1[val]= freqCounter1[val] + 1 || 1
    }
    
    for(let val of arr2){
        freqCounter2[val]= freqCounter2[val] + 1 || 1
    }
    console.log('freqCounter1: ', freqCounter1)
    console.log('freqCounter2: ', freqCounter2)
    for (let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            console.log('Key Mismatch')
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            console.log('Frequency Mismatch')
            return false
        }
    }
    return true 
}   
console.log(same_array([2,4,2], [4,16,4]))

console.log(same_array([2,1], [4, 4]))

console.log(same_array([3,1,2,3,1], [9,9,4,1,1]))

// Map-based Frequency Counter Pattern (using ES6 Map)
// ---------------------------------------------------
// This implementation mirrors the object-based frequency counter above,
// but uses Map to store frequencies. Behavior and complexity remain O(n).
function same_array_map(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('Length Mismatch')
        return false
    }

    const freqMap1 = new Map()
    const freqMap2 = new Map()

    for (let val of arr1){
        freqMap1.set(val, (freqMap1.get(val) || 0) + 1)
    }

    for (let val of arr2){
        freqMap2.set(val, (freqMap2.get(val) || 0) + 1)
    }

    console.log('freqMap1: ', freqMap1)
    console.log('freqMap2: ', freqMap2)

    for (let [key, count] of freqMap1.entries()){
        const squareKey = key ** 2
        if(!freqMap2.has(squareKey)){
            console.log('Key Mismatch')
            return false
        }
        if(freqMap2.get(squareKey) !== count){
            console.log('Frequency Mismatch')
            return false
        }
    }
    return true
}

console.log('--- Map-based results ---')
console.log(same_array_map([2,4,2], [4,16,4]))
console.log(same_array_map([2,1], [4, 4]))
console.log(same_array_map([3,1,2,3,1], [9,9,4,1,1]))