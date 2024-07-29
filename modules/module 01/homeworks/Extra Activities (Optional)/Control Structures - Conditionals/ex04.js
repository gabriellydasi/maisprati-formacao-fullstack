/*4 - Check if a number is even or odd
Write a program that reads a number and uses an
if/else structure to check if the number is even or odd. Print an
appropriate message.*/

const prompt = require('prompt-sync')()

let num = Number(prompt('Enter a number: '))

if(num % 2 === 0){
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}