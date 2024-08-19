/* 
    8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
*/

const prompt = require('prompt-sync')();

let max;
let min;

let num1 = Number(prompt('Primeiro valor: '));
let num2 = Number(prompt('Segundo valor: '));

if(num1 > num2){
    max = num1;
    min = num2;
}else{
    max = num2;
    min = num1;
}

console.log(min + ' ' + max);

