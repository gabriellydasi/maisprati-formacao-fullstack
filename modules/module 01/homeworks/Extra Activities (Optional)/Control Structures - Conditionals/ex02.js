/*2 - Check if a year is a leap year 
Write a program that reads a year and uses an if statement to check if the year is a leap year. 
A year is a leap year if it is divisible by 4 but not by 100, unless it is also divisible by 400. 
Print a sent message.*/

const prompt = require('prompt-sync')()

let year = parseInt(prompt('Enter a year: '))

let leapYear = false

if((year % 4 === 0)){
    if(year % 100 !== 0){
        leapYear = true
    }else{
        if(year % 400 === 0){
            leapYear = true
        }
    }
}

if(leapYear){
    console.log(`${year} is a leap year`)
}else{
    console.log(`${year} is not a leap year`)
}