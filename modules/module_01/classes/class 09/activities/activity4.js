// 4) Criem um novo array contendo apenas números pares
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let evens = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        evens.push(arr[i])
    }
}

console.log(evens)