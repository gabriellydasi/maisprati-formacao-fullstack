// 4) Criem um novo array contendo apenas números pares com função
let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function evensArray(arr){
    let evens = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        }
    }
    return evens
}

console.log(evensArray(x))