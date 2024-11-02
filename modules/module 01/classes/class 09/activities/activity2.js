// 2) Encontre o maior número de um array 
let array = [6, 1, 9, 8, 63, 5, 0]

let max = array[0]

for(let i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i]
    }
}

console.log(`Maior número: ${max}`)