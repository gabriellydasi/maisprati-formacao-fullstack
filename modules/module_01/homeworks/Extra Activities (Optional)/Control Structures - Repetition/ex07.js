/* 7 - Count the number of digits in a number
Write a program that uses a do while loop to count the number of digits in a given number (for example, 12345 has 5 digits).
Tip: Use division operations to reduce the number until it is zero. */ 

function countDigits(number) {
    // Lidar com números negativos
    number = Math.abs(number);

    let count = 0;

    do {
        count++;            
        number = Math.floor(number/10); // Remove o último dígito do número
    } while (number > 0);

    console.log(`The number has ${count} digits.`);
}

countDigits(12345); 
countDigits(2001);  

