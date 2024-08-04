// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let count = 0;
let num = 101; // maior que 100 

while(count < 50){
    let isPrime = true; 

    if(num <= 1){
        isPrime = false;
    }else if(num === 2){
        isPrime = true;
    }else if(num % 2 === 0){
        isPrime = false;
    }else{
        for(let i = 3; i <= Math.sqrt(num); i += 2){ // verificar se o número é divisível por qualquer número ímpar a partir de 3 até a raiz quadrada do número.
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime){
        console.log(num);
        count++;
    }

    num++;
}


