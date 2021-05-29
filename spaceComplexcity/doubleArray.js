let double = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);

        
    }
    return newArr
}

console.log(double([123]));


// here newArr is taking 1 space but its being increasing with the length of arr

// so space complexcity here will be O(n) space