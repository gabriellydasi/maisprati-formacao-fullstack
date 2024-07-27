// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias

const prompt = require('prompt-sync')()

console.log('1 - Janeiro\n2 - Fevereiro\n3 - Março\n4 - Abril\n5 - Maio\n6 - Junho\n7 - Julho\n8 - Agosto\n9 - Setembro\n10 - Outubro\n11 - Novembro\n12 - Dezembro\n')
let option = Number(prompt('Digite um valor referente ao mês desejado: '))

switch(option){
    case 2:
        mes = 'Esse mês tem 28 dias'
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        mes = 'Esse mês tem 31 dias'
        break
    case 4: case 6: case 9: case 11:
        mes = 'Esse mês tem 30 dias'
        break 
    default:
        mes = 'Entrada inválida'
        break
}

console.log(mes)