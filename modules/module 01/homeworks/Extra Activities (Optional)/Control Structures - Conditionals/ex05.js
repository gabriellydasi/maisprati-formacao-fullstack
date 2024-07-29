/*5 - Check a swimmer's age
Write a program that reads a swimmer's age and uses an
if/else structure to determine the swimmer's age category:
            Child A: 5 - 7 years
            Child B: 8 - 10 years
            Youth A: 11 - 13 years
            Youth B: 14 - 17 years
            Adult: 18 years or older*/

const prompt = require('prompt-sync')()

let age = Number(prompt('What is your age? '));

if((age >= 5) && (age <= 7)){
    console.log('You qualify in the Children A Category');
}else if((age >= 8) && (age <= 10)){
    console.log('You qualify in the Children B Category');
}else if((age >= 11) && (age <= 13)){
    console.log('You qualify in the Youth A Category');
}else if((age >= 14) && (age <= 17)){
    console.log('You qualify in the Youth B Category');
}else if(age >= 18){
    console.log('You qualify in the Adult Category');
}