// console.log(10 > 5) // true
// console.log(10 < 5) // false
// console.log(10 <= 5) // false
// console.log(10 >= 5) // true
// console.log(10 == 5) // false
// console.log(10 == '10') // true
// console.log(10 === '10') // false
// console.log(10 != '10') // false 
// console.log(10 !== '10') // true

// Operadores lógicos -> comparam duas expressões

// console.log((10 < 5) && (10 > 2)) // false
// console.log((10 < 5) || (10 > 2)) // true
// console.log((10 < 5) || !(10 > 2)) // true
// console.log(!(10 < 5) || (10 > 2)) // true

// let user = 'Gabrielly';
// let password = '1234';

// let authentication = user === 'Gabrielly' && password == '1234';

// console.log(authentication);

// const grade = 40;

// if(grade >= 60){
//     console.log('APROVADO(A)!');
// }else{
//     console.log('REPROVADO(A)');
// }

// console.log('Fim do código');


// const idade = 23;

// if(idade >= 18 && idade <= 32){
//     console.log('Você está apto(a) para se inscrever para o concurso!');
// } else {
//     console.log('Você não está apto(a) para se inscrever para o concurso!');
// }

// <condição> ? <verdadeiro> : <falso> # operador ternário
// let ternaryResultado = (10 < 100) ? console.log(true) : console.log(false);

// #ex1
// const number = 8;

// if(number === 0){
//     console.log(`${number} é um valor NULO`);
// }else{
//     if(number % 2 === 0){
//         console.log(`${number} é um valor PAR`);
//     }else{
//         console.log(`${number} é um valor IMPAR`);
//     }
// }

// // #ex2

// const a = 10;
// const b = 0;
// const c = 10;

// let maiorAB = ((a + b) + Math.abs(a - b))/2;
// let maior = ((maiorAB + c) + Math.abs(maiorAB - c))/2

// if(a == b && b == c && c == a){
//     console.log('Os números possuem o mesmo valor. Assim, não há determinação de maior valor entre eles');
// }else{
//     console.log(`O número maior entre ${a}, ${b} e ${c} é ${maior}`);
// }

// #ex3
// a maneira que eu fiz
// const num1 = 10;
// const num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 / num2);
// console.log(num1 % num2);



// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Insira o primeiro valor: '))
// let num2 = Number(prompt('Insira o segundo valor: '))
// let operacao = prompt('Escolha a operação: + - * /')


let option = 0

switch(option){
    case 1:
        console.log('Você selecionou a primeira opção')
        break
    case 2:
        console.log('Você selecionou a segunda opçãp')
        break
    default:
        console.log('Você não selecionou nenhuma opção')
        break
}
