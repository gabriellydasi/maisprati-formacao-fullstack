/*
    2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
*/

const prompt = require('prompt-sync')();

let categoryAge;
const age = parseInt(prompt('Digite a sua idade: '));

if((age >= 0) && (age <= 12)){
    categoryAge = 'Criança';
    console.log(`Você tem ${age} anos e se encaixa na categoria '${categoryAge}'.`);
}else if((age >= 13) && (age <= 17)){
    categoryAge = 'Adolescente';
    console.log(`Você tem ${age} anos e se encaixa na categoria '${categoryAge}'.`);
}else if((age >= 18) && (age <= 59)){
    categoryAge = 'Adulto';
    console.log(`Você tem ${age} anos e se encaixa na categoria '${categoryAge}'.`);
}else if(age >= 60){
    categoryAge = 'Idoso';   
    console.log(`Você tem ${age} anos e se encaixa na categoria '${categoryAge}'.`);
}else{
    console.log('Idade inválida');
}

