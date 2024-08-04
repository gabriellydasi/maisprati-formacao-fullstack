// 5) Contar ocorrências de um valor 
let x = [10, 20, 30, 10, 90, 10]
let valor = 10
let quantidade = 0

for(let i = 0; i < x.length; i++){
    if(x[i] === valor){
        quantidade++
    }
}

console.log(`O valor ${valor} aparece ${quantidade} vezes`)