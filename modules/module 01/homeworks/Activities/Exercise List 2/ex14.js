/*
    Combinação de Estruturas
    14. Manipulando Objetos Complexos
        - Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.
*/

const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: [
                {nome: 'Ana'},
                {nome: 'Milena'},
                {nome: 'Laura'}
            ]
        },
        {
            nome: 'Tecnologia',
            funcionarios: [
                {nome: 'Túlio'},
                {nome: 'Maria'},
                {nome: 'Carlos'}
            ]
        },
        {
            nome: 'Financeiro',
            funcionarios: [
                {nome: 'João'},
                {nome: 'Vitória'},
                {nome: 'Ruan'}
            ]
        }
    ]
}

// Itera sobre os departamentos usando for in
for(let index in empresa.departamentos){
    const departamento = empresa.departamentos[index]

    // Itera sobre os funcionários do departamento usando for of
    for(let funcionario of departamento.funcionarios){
        console.log(`Funcionário(a): ${funcionario.nome}\nDepartamento: ${departamento.nome}\n`)
    }
}