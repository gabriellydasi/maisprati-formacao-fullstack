/*3 - Calculate the average of three numbers and determine the grade
Write a program that reads three grades from a student, calculates the
average, and uses an if/else structure to determine the grade (A, B, C,
D, F) based on the average. Print the grade.
Hint: The average is the sum of the grades divided by three. Define the ranges for each grade.*/

const prompt = require('prompt-sync')()

let n1 = Number(prompt('Enter the first grade: '))
let n2 = Number(prompt('Enter the second grade: '))
let n3 = Number(prompt('Enter the third grade: '))

average = ((n1 + n2 + n3)/3)

if((average >= 90) && (average <= 100)){
    grade = 'A'
}else if((average >= 80) && (average <= 89)){
    grade = 'B'
}else if((average >= 70) && (average <= 79)){
    grade = 'C'
}else if((average >= 60) && (average <= 69)){
    grade = 'D'
}else{
    grade = 'F'
}

console.log('\nAverage =', average.toFixed(2))
console.log('Grade =', grade)