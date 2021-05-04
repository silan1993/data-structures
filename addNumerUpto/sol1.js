let addUpto = n => {
    let sum = 0
    for (let index = 1; index <= n; index++) {
        sum +=index
    }
    return sum
}
let start = performance.now()
console.log(addUpto(100000))
let end = performance.now()
console.log(`time taken ${(end-start)/1000} seconds`);