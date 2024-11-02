/* 
    Manipulação de Arrays de Objetos com 'for of'
    5. Calculando Valores em Arrays de Objetos
    - Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.
*/ 

const alunos = [
    {nome: 'João', nota1: 6.3, nota2: 8.2},
    {nome: 'Maria', nota1: 9.6, nota2: 10.0},
    {nome: 'Aurora', nota1: 8.9, nota2: 7.6},
    {nome: 'Paulo', nota1: 4.2, nota2: 6.0},
    {nome: 'Helena', nota1: 10.0, nota2: 9.8}
]

for(let aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`Aluno: ${aluno.nome}\nMédia: ${media}\n`)
}