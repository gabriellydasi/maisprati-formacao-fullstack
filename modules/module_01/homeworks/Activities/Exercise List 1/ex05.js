/* 
    5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
    
    Baixo peso: IMC < 18,5
    Peso normal: IMC 18,5 - 24,9
    Sobrepeso: IMC 25 - 29,9
    Obesidade: IMC >= 30
    o IMC é calculado como o peso dividido pela altura ao quadrado (IMC = peso / altura²).
*/

const prompt = require('prompt-sync')();

let category;
let height = Number(prompt('Altura em m: '));
let weight = Number(prompt('Peso em kg: '));

let bmi = weight / (Math.pow(height, 2));

if(bmi < 18.5){
    category = 'Baixo peso';
}else if((bmi >= 18.5) && (bmi <= 24.9)){
    category = 'Peso Normal';
}else if((bmi >= 25) && (bmi <= 29.9)){
    category = 'Sobrepeso';
}else{
    category = 'Obesidade';
}

console.log(`IMC = ${bmi.toFixed(2)}\nCategoria: ${category}`);