/* 5 - Reverse the digits of a number
Write a program that uses a while loop to reverse the digits of a given number (for example, 1234 should be printed as 4321).
Tip: Use modulus and division operations to extract the digits. */

function reversedNum(number){
    let reversedNumber = 0;
    while(number > 0){
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number/10);
    }
    console.log(reversedNumber);
}

reversedNum(1234);
reversedNum(2001);



