/* 
    Manipulação de Arrays de Objetos com 'for of'
    4. Iterando Sobre Arrays de Objetos
        - Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
*/

const pessoas = [
    {nome: 'Gabrielly Silva', idade: 23, cidade: 'Bezerros'},
    {nome: 'Lucivânia Maria', idade: 47, cidade: 'Encruzilhada'},
    {nome: 'Eduardo Arthur', idade: 25, cidade: 'São Paulo'},
    {nome: 'Ana Costa', idade: 32, cidade: 'Rio de Janeiro'}
]

for(let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCidade: ${pessoa.cidade}\n`)
}


