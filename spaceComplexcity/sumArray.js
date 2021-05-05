let sum = arr => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        
    }
    return total
}

console.log(sum([1, 2, 3]))


// here var total declaration take 1 space

// i =0 took 1 more space

// so there are only 2 space irrespective of array length

// space complexcity O(1) Space