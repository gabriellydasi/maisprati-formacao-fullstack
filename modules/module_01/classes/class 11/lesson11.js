/* Funções Anônimas: Funções sem nome, geralmente usadas como callbacks.
Funções Arrow: Sintaxe mais concisa para escrever funções, sem seu próprio this.
Funções de Callback: Funções passadas como argumentos para outras funções. */

// let teste = function(){
//     console.log('Olá, mundo')
// }

// teste()

// function showFunction(sucessCallBack, errorCallBack){
//     if(true){
//         sucessCallBack('Requisição bem sucedida')
//     }else{
//         errorCallBack('Erro na requisição')
//     }
// }

// let sucessCallBack = function(message){
//     console.log(message)
// }

// let errorCallBack = function(message){
//     console.error(message)
// }

// let errorCallback = (message) => { // arrow function (outra forma de escrever uma função anônima)
//     console.log(message)
// } 

// showFunction(sucessCallBack, errorCallBack)

// # Manipulação de Strings

let nome = 'Gabrielly'

console.log('Gabrielly'.length) // comprimento da string
console.log('Gabrielly'.charAt(0)) // qual string está no índice 0
console.log(nome.indexOf('b')) // qual o índice do caractere 'b'

console.log(nome.replace('Gabrielly', 'Amora')) // substituição de string

console.log(nome.substr(7, 8)) // a partir de qual posição e quantos caracteres - se omitimos o valor da segunda posição, é selecionado todos os elementos a partir da posição inicial

console.log(nome.toLocaleUpperCase()) // todos os caracteres maiúsculos
console.log(nome.toLocaleLowerCase()) // todos os caracteres minúsculos

console.log('-' + nome.trim() + '-') // remove extremidades em branco de uma string

// # Métodos Matemáticos

console.log(Math.ceil(100.73)) // arredondamento para cima 
console.log(Math.floor(100.73)) // arrendodamento para baixo 
console.log(Math.round(100.73)) // arredondamento de forma inteligente

console.log(Math.sqrt(100)) // raiz quadrada
console.log(Math.cbrt(8, 2)) // raiz cúbica
console.log(Math.pow(2, 4)) // potenciação, 2^4
console.log(Math.abs(100.20)) // valor absoluto

console.log(Math.random()) // número aleatório entre 0 a 1
console.log(Math.random()*100) // número aleatório entre 0 e 100

// # Datas

// A data do JavaScript é baseada no valor de tempo em milisegundos desde a meia noite de 01 de Janeiro de 1970, UTC.

let date = new Date() // trabalha em cima do sistema operacional do usuário

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())

console.log(date.toString())
date.setDate(date.getDate() + 720)
console.log(date.toString())

let date1 = new Date(2024, 7, 6) // adicionar um número a menos do mês 
let date2 = new Date(2023, 7, 6)

console.log(date1.toString())

console.log(date1.getTime()) // convertendo a data para milisegundos
console.log(date2.getTime())

let milliseconds_betwen_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(milliseconds_betwen_dates)

let milliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`Um dia tem ${milliseconds_per_day} ms`)

console.log(`A diferença entre as datas é de ${Math.ceil(milliseconds_betwen_dates)/milliseconds_per_day} dias`)

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}