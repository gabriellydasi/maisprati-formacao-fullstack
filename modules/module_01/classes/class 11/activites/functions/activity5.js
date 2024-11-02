// 5) Contar ocorrências de um valor com função
let w = [10, 20, 30, 10, 90, 10]
let value = 10
let count = 0

function valueOccurrence(x){
    for (let i = 0; i < x.length; i++){
        if (x[i] === value){
            count++
        }
    }
    return count
}

console.log(`O valor ${value} aparece ${valueOccurrence(w)} vezes`)

