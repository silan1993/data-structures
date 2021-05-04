let addUpto = n => {
    return n* (n+1) /2
}
let start = performance.now()
console.log(addUpto(100000))
let end = performance.now()
console.log(`time taken ${(end-start)/1000} seconds`);