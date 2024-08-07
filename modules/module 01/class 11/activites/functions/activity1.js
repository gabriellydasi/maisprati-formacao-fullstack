// 1) Soma dos elementos de um array com função
let x = [10, 20, 30, 40]

function sumArray(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log('Soma =', sumArray(x))