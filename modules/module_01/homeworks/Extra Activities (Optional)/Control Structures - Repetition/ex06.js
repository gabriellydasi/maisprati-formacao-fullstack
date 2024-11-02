/* 6 - Check if a number is palindrome
Write a program that uses a while loop to check whether a given number (for example, 121) is a palindrome. A number is palindromic if it is equal to its reverse. */

function palindromeNumber(number) {
    let originalNumber = number; // Armazena o número original
    let reversedNumber = 0;

    while(number > 0){
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    if(originalNumber === reversedNumber){
        console.log(`${originalNumber} is a palindrome number.`);
    }else{
        console.log(`${originalNumber} is not a palindrome number.`);
    }
}

palindromeNumber(121);  
palindromeNumber(2001); 
