function same_array(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log('Length Mismatch')
        return false
    }

    for (let i = 0; i < arr1.length; i++){
        console.log('arr1[i]: ', arr1[i])
        for( let j =0; j< arr2.length; j++){
            console.log('arr2[j]: ', arr2[j])
            console.log('arr1[i]**2: ', arr1[i]**2)
            if(arr1[i]**2 === arr2[j]){
                console.log('Match Found: ', arr1[i], arr2[j])
                arr2.splice(j, 1)
                break
            }
        }
    }
     if(arr2.length === 0){
            console.log('Done')
            return true
        }
    return false
}

console.log(same_array([2,4,2], [4,16,4]))

console.log(same_array([2,1], [4, 4]))

console.log(same_array([3,1,2,3,1], [9,9,4,1,1]))

console.log(same_array([3,1,2,3,1], [9,1,4]))