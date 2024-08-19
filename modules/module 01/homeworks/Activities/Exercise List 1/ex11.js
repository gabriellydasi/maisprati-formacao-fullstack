/*
    11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
*/

const prompt = require('prompt-sync')();

let sum = 0;
let number;
let x = 1;

for(let i = 0; i < 5; i++){
    number = Number(prompt(`Valor ${x}: `));
    sum += number;
    x++;     
}

console.log(`Soma total = ${sum}`);