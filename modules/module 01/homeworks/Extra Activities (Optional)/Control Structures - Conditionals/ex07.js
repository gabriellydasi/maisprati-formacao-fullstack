/*7 - Calculate the value of a simple mathematical expression
Write a program that reads two numbers and an operator (+, -, *,
/) and uses a switch structure to calculate the result of the operation.
Print the result.
Hint: Use the arithmetic operators in each case of the switch.*/

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Enter the first number: '))
let num2 = Number(prompt('Enter the second number: '))


console.log('\nOPERATORS')
console.log('1) + \n2) -\n3) *\n4) /\n')
let option = Number(prompt('Choose an option: '))

switch(option){
    case 1:
        console.log(`${num1} + ${num2} =`, num1+num2)
        break
    case 2:
        console.log(`${num1} - ${num2} =`, num1-num2)
        break
    case 3:
        console.log(`${num1} * ${num2} =`, num1*num2)
        break
    case 4:
        console.log(`${num1} / ${num2} =`, num1/num2)
}