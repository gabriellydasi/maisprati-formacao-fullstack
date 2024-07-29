/*1 - Check if a number is positive, negative or zero
Write a program that reads a number and uses an if structure
to check if the number is positive, negative or zero. Print an appropriate
message for each case.*/

const prompt = require('prompt-sync')()

let num = Number(prompt('Enter a number: '))

if(num === 0){
    console.log(`${num} is a null number`)
}else{
    if(num > 0){
        console.log(`${num} is a positive number`)
    }else{
        console.log(`${num} is a negative number`)
    }
}

