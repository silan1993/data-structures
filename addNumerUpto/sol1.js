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
console.log(`time taken ${(end - start) / 1000} seconds`);



// here the complexcity will be O(n) as it increase with number of n grows

// 5 operation is happening like + = ++   and 2 assignments so complexcity is  5n+2   so simply we call it O(n)