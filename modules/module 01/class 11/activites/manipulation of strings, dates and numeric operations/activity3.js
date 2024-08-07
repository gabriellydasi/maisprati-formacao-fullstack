// 3) Gerar número aleatório

// const prompt = require('prompt-sync')()

// let min = Number(prompt('Digite um valor mínimo: '))
// let max = Number(prompt('Digite um valor máximo: '))

function randomNumber(y0, y1){
    return Math.ceil(Math.random() * (y1 - y0) + y0);
}

// console.log(`Número aleatório entre ${min} e ${max} = ${randomNumber(min, max)}`)
console.log(randomNumber(1, 100));

