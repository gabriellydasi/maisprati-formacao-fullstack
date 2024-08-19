/*
    3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require('prompt-sync')();

let grade = Number(prompt('Digite a sua nota: '));

if((grade >= 7) && (grade <= 10)){
    console.log('Situação: APROVADO(A)');
}else if((grade >= 5) && (grade <= 6.9)){
    console.log('Situação: RECUPERAÇÃO');
}else{
    console.log('Situação: REPROVADO(A)');
}