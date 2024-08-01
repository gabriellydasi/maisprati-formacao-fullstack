/*9 - Check a person's age range 
Write a program that reads a person's age and uses an if/else structure to determine the age range: 
            Child: 0 - 12 years 
            Teenager: 13 - 17 years 
            Adult: 18 - 59 years 
            Elderly: 60 years or older 
Tip: Use a switch structure outside the if/else block to print a specific message for each age range.*/

const prompt = require('prompt-sync')()

let ageRange
let age = parseInt(prompt('What is your age? '))

if (age >= 0 && age <= 12){
    ageRange = 'Child'
}else if (age >= 13 && age <= 17){
    ageRange = 'Adolescent'
}else if (age >= 18 && age <= 59) {
    ageRange = 'Adult'
} else if (age >= 60) {
    ageRange = 'Elderly'
} 

switch(ageRange){
    case 'Child':
        console.log('You are a child.')
        break
    case 'Adolescent':
        console.log('You are an adolescent.')
        break
    case 'Adult':
        console.log('You are an adult.')
        break
    case 'Elderly':
        console.log('You are an elderly')
    default:
        console.log("Invalid age entered.")
        break
}
