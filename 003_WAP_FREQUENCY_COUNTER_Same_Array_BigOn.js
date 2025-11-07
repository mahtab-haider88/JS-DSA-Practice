function same_array(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('Length Mismatch')
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}   
    // Build frequency counter objects
    // Counting occurrences of each value in both arrays
    // Using for...of loop to iterate through array values
    // Then using objects to store frequency counts
    // e.g. freqCounter1 = { '2': 2, '4': 1 } for arr1 = [2,4,2]
    // e.g. freqCounter2 = { '4': 2, '16': 1 } for arr2 = [4,16,4]
    // This allows for O(n) time complexity instead of O(n^2)
    // Nested loops are avoided
    // This is the frequency counter pattern
    // It is very useful for comparing two data sets
    // based on frequency of values
    // rather than their order or position
    // This pattern is common in DSA problems
    // It helps optimize performance significantly
    // especially with larger input sizes
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