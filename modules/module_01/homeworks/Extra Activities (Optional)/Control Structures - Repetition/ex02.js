/*2 - Check if a number is prime
Write a program that uses a for loop to check if a given number (e.g. 29) is prime. Print "Is prime" or "Is not prime".
Hint: A prime number is only divisible by 1 and itself.*/

const prompt = require('prompt-sync')()

for(let i = 0; i < 11; i++){
    let num = Number(prompt('Enter a number: '))
    let isPrime = true
    if(num <= 1){
        isPrime = false;
    }else if(num === 2){
        isPrime = true;
    }else if(num % 2 === 0){
        isPrime = false;
    }else{
        for(let i = 3; i <= Math.sqrt(num); i += 2){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    if(isPrime){
        console.log(`${num} is prime`)
        i++
    }else{
        console.log(`${num} is not prime`)
    }

    num++

}

console.log('\nEnd')



