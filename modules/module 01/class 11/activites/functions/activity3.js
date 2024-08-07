// 3) Inverter um array com função
let x = [10, 20, 30, 40]

function reversedArray(arr){
    let reversed = []
    for(let k = arr.length - 1; k >= 0; k--){
        reversed.push(arr[k])
    }
    return reversed
}

console.log(reversedArray(x))