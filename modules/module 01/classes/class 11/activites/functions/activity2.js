// 2) Encontre o maior número de um array com função
let x = [6, 1, 9, 8, 63, 5, 0]

function maxNumber(array){
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log('Maior número:', maxNumber(x))