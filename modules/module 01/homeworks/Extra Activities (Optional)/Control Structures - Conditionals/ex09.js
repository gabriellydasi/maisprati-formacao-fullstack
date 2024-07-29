/*9 - Check a person's age range 
Write a program that reads a person's age and uses an if/else structure to determine the age range: 
            Child: 0 - 12 years 
            Teenager: 13 - 17 years 
            Adult: 18 - 59 years 
            Elderly: 60 years or older 
Tip: Use a switch structure inside the if/else block to print a specific message for each age range.*/

const prompt = require('prompt-sync')()

let age = parseInt(prompt('What is your age? '))

if (age >= 0 && age <= 12) {
    switch(true) {
        case (age >= 0 && age <= 12):
            console.log("You are a child.");
            break;
    }
} else if (age >= 13 && age <= 17) {
    switch(true) {
        case (age >= 13 && age <= 17):
            console.log("You are a teenager.");
            break;
    }
} else if (age >= 18 && age <= 59) {
    switch(true) {
        case (age >= 18 && age <= 59):
            console.log("You are an adult.");
            break;
    }
} else if (age >= 60) {
    switch(true) {
        case (age >= 60):
            console.log("You are elderly.");
            break;
    }
} else {
    console.log("Invalid age entered.");
}
