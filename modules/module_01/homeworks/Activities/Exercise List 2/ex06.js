/*
    Manipulação de Arrays de Objetos com 'for of'
    6. Filtrando Arrays de Objetos
        - Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.
*/

const funcionarios = [
    {nome: 'Gabrielly', cargo: 'Desenvolvedora', salario: 6500},
    {nome: 'Pedro', cargo: 'Filmmaker', salario: 4200},
    {nome: 'Júlia', cargo: 'Designer', salario: 5100},
    {nome: 'Tiago', cargo: 'DevOps', salario: 7000},
    {nome: 'João', cargo: 'Engenheiro', salario: 5800},
    {nome: 'Laura', cargo: 'Arquiteta', salario: 5720}
]

console.log('Funcionários que possuem salário acima de R$ 6 000: ')

for(let funcionario of funcionarios){
    if(funcionario.salario > 6000){
        console.log(`- ${funcionario.nome}`)
    }
}