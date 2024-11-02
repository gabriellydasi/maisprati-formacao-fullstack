/*1 - Print the Fibonacci sequence up to the 10th term 
Write a program that uses a loop to print the first 10 terms of the Fibonacci sequence. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)*/

let num1 = 0
let num2 = 1

for(let i = 0; i < 11; i++){
    console.log(num1)
    let next = num1 + num2
    num1 = num2
    num2 = next
}

