/* 8 - Calculate the sum of the digits of a number
       
Write a program that uses a do while loop to calculate the sum of the digits of a given number (for example, the sum of the digits of 1234 is 10).

Tip: Use modulus operations to extract the digits and then add them. */

function sumOfDigits(number) {
    number = Math.abs(number);

    let sum = 0;

    do {
        let digit = number % 10; 
        sum += digit;            // Adiciona o dígito à soma
        number = Math.floor(number / 10); 
    } while (number > 0);

    console.log(`The sum of the digits is ${sum}.`);
}

sumOfDigits(1234); 
sumOfDigits(2001);