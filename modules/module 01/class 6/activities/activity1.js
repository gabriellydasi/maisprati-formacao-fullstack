// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

console.log('1 - Segunda\n2 - Terça\n3 - Quarta\n4 - Quinta\n5 - Sexta\n')

const prompt = require('prompt-sync')()

let dia
let option = Number(prompt('Escolha uma opção: '))

switch(option){
    case 1:
        dia = 'Segunda-feira'
        break
    case 2:
        dia = 'Terça-feira'
        break
    case 3:
        dia = 'Quarta-feira'
        break
    case 4:
        dia = 'Quinta-feira'
        break
    case 5:
        dia = 'Sexta-Feira'
        break
    default:
        dia = 'Entrada inválida'
        break
}

console.log(`Boa ${dia}!`)

