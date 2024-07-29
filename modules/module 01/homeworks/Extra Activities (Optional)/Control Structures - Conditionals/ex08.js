/*8 - Check the season
Write a program that reads a number from 1 to 4 and uses a
switch structure to print the corresponding season. (1 =
Spring, 2 = Summer, 3 = Autumn, 4 = Winter)*/

const prompt = require('prompt-sync')()

option = parseInt(prompt('Enter a number from 1 to 4: '))

switch(option){
    case 1:
        console.log('Corresponding season: Spring')
        break
    case 2:
        console.log('Corresponding season: Summer')
        break
    case 3:
        console.log('Corresponding season: Autumn')
        break
    case 4:
        console.log('Corresponding season: Winter')
        break
    default:
        console.log('Unable option')
        break
}