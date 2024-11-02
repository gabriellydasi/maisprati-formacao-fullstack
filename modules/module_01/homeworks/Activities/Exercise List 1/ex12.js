/* 
    12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
*/

const prompt = require('prompt-sync')();

let number = parseInt(prompt('Digite o valor que deseja calcular a tabuada: '));

for(let i = 1; i < 11; i++){
    console.log(`${number} x ${i} = ${number * i}`);
}