/* 
    15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
*/

let fibonacci = [0, 1];

for(let i = 2; i < 10; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.join(' ')); // O método 'join' permite especificar um separador para os elementos do array, que pode ser um espaço ou qualquer outra string 

for(let i = 0; i < fibonacci.length; i++){ // Outra maneira de imprimir, percorrendo o array
    console.log(fibonacci[i]);
} 

