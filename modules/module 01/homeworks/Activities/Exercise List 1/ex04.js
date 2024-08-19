/*
    4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')();

let opt, num1, num2;

function menu(){
    console.log('\nOPERAÇÕES MATEMÁTICAS\n');
    console.log('1) Soma\n2) Subtração\n3) Sair\n');
    opt = parseInt(prompt('Escolha uma opção: '));

    switch(opt){
        case 1:
            num1 = Number(prompt('Primeiro valor: '));
            num2 = Number(prompt('Segundo valor: '));
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case 2:
            num1 = Number(prompt('Primeiro valor: '));
            num2 = Number(prompt('Segundo valor: '));
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case 3:
            console.log('\nSaindo...');
            break;
        default:
            console.log('Opção inválida');
            break;
    }
}

do{
    menu();
}while(opt !== 3);

console.log('Programa encerrado.');



