let addUpto = n => {
    return n* (n+1) /2
}
let start = performance.now()
console.log(addUpto(100000))
let end = performance.now()
console.log(`time taken ${(end - start) / 1000} seconds`);

// here the complexcity will be O(1) as it does not increase with number of n grows.
// here only 3 operation is happening * + and /