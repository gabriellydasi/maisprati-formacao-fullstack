/* 
    Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
*/ 

const prompt = require('prompt-sync')();
let quant = 0;
let sum = 0;
let number;

while(number !== 0){
    number = parseFloat(prompt('Digite qualquer número diferente de zero: '));
    sum += number;
    quant++;
}

quant -= 1; // não contar quando o número 0 for digitado

let average = sum / quant;

console.log(`Média Aritmética: ${average.toFixed(2)}`);


