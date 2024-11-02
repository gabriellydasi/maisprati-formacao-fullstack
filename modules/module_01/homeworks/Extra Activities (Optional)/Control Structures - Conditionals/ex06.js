/*6 - Check the day of the week
Write a program that reads a number from 1 to 7 and uses a
switch structure to print the corresponding day of the week. (1 =
Sunday, 2 = Monday, etc.)*/

const prompt = require('prompt-sync')()

console.log('1 - Sunday\n2 - Monday\n3 - Tuesday\n4 - Wednesday\n5 - Thursday\n6 - Friday\n7 - Saturday\n')
let option = parseInt(prompt('What day is today? '))

switch(option){
    case 1:
        console.log('Have a great sunday!')
        break
    case 2:
        console.log('Have a great monday!')
        break
    case 3:
        console.log('Have a great tuesday')
        break
    case 4:
        console.log('Have a great wednesday')
        break
    case 5:
        console.log('Have a great thursday')
        break
    case 6:
        console.log('Have a great friday')
        break
    case 7:
        console.log('Have a great saturday')
        break
    default:
        console.log('Invalid input')
        break
}

