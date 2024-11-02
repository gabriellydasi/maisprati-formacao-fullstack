/* 
    14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
*/

const prompt = require('prompt-sync')();

let factorial = 1;
let number = parseInt(prompt('Digite um número inteiro: '));

if(number <= 0){
    console.log('Não é possível calcular o fatorial de números nulos e negativos.');
}else{
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }
    console.log(`${number}! = ${factorial}`);
}