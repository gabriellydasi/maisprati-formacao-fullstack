// 1) Inverter uma string

function reverseString(string){
    let reversedStr = string.toLocaleLowerCase().split('').reverse().join('');
    return reversedStr;
}

console.log(reverseString('Gabrielly'));


