/* 
    7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/

const prompt = require('prompt-sync')();

let quantity = parseInt(prompt('Quantidade de maçãs: '));

if(quantity >= 12){
    price = 0.25;
}else{
    price = 0.30;
}

let total = quantity * price;

console.log(`Total: R$ ${total.toFixed(2)}`);