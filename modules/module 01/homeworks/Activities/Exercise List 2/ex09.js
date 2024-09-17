/* 
    Manipulação de Arrays de Objetos com 'forEach'
    9. Contabilizando Elementos com uma Condição
        - Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.
*/

const clientes = [
    {nome: 'Ana', idade: 30, cidade: 'São Paulo'},
    {nome: 'Pedro', idade: 45, cidade: 'Curitiba'},
    {nome: 'José', idade: 32, cidade: 'Bonito'},
    {nome: 'Maria', idade: 20, cidade: 'Recife'},
    {nome: 'Júlia', idade: 39, cidade: 'Campinas'}
]

let count = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        count++
    }
})

console.log(`${count} clientes têm mais de 30 anos`) 