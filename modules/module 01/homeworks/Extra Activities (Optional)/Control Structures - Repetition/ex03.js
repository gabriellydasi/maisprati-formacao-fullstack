/* 3 - Print a triangle of numbers
Write a program that uses a for loop to print a triangle of numbers.
Tip: Use two for loops, one inside the other. */ 

function printNumberTriangle(height){
    for(let i = 1; i <= height; i++){
        let line = '';
        for(let j = 1; j <= i; j++){
            line += j + ' ';
        }
        console.log(line);
    }
}

printNumberTriangle(5);


