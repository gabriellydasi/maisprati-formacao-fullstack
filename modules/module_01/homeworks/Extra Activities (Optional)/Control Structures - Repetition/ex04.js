/*4 - Calculate the factorial of a number
Write a program that uses a while loop to calculate the factorial of a given number (for example, 5). The factorial of 5 (5!) is 120.
Hint: The factorial of n (n!) is the product of all the numbers from 1 to n.*/

const prompt = require('prompt-sync')()

let num = parseInt(prompt('Enter a number: '))
let factorial = 1
let i = 1

if((num === 0) || (num < 0)){
    console.log('Unable to calculate the factorial of this number')
}else{
    while(i <= num){
        factorial *= i
        i += 1
    }

    console.log(`${num}! = ${factorial}`)
}


