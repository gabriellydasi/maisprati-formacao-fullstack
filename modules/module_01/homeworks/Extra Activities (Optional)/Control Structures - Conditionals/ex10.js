/*10 - Calculate BMI and determine category
Write a program that reads a person's weight (kg) and height (m), calculates the Body Mass Index (BMI), and uses an if/else structure to determine the category:
            Underweight: BMI < 18.5
            Normal weight: BMI 18.5 - 24.9
            Overweight: BMI 25 - 29.9
            Obesity grade I: BMI 30 - 34.9
            Obesity grade II: BMI 35 - 39.9
            Obesity grade III: BMI >= 40
            Hint: BMI is calculated as weight divided by height squared (BMI = weight / height²).*/

const prompt = require('prompt-sync')()

let weight = Number(prompt('Enter your weight in kg: '))
let height = Number(prompt('Enter your height in m: '))

let bmi = (weight)/(height*height)

if(bmi < 18.5){
    console.log('BMI =', bmi.toFixed(2))
    console.log('Underweight')
}else if((bmi >= 18.5) && (bmi <= 24.9)){
    console.log('BMI =', bmi.toFixed(2))
    console.log('Normal weight')
}else if((bmi >= 25) && (bmi <= 29.9)){
    console.log('BMI =', bmi.toFixed(2))
    console.log('Overweight')
}else if((bmi >= 30) && (bmi <= 34.9)){
    console.log('BMI =', bmi.toFixed(2))
    console.log('Obesity grade I')
}else if((bmi >= 35) && (bmi <= 39.9)){
    console.log('BMI =', bmi.toFixed(2))
    console.log('Obesity grade II')
}else{
    console.log('BMI =', bmi.toFixed(2))
    console.log('Obesity grade III')
}

