/*10 - Find the Greatest Common Divisor (GCD) of Two Numbers
Write a program that uses a do while loop to find the greatest common divisor (GCD) of two given numbers (for example, 56 and 98).
Hint: Use Euclid's algorithm, where you repeat the process of replacing the larger number with the difference of the two numbers until both numbers are equal.*/

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Enter the first number: '))
let num2 = Number(prompt('Enter the second number: '))

let a = num1
let b = num2

do{
    let temp = b
    b = a % b
    a = temp
}while(b !== 0)

const MDC = a

console.log(`The greatest common divisor between ${num1} and ${num2} is ${MDC}`)