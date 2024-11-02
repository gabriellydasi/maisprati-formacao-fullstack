// 2) Contar vogais

let name = 'Gabrielly';

function countVowels(string){
    let vowels = 'aeiou';
    let count = 0;

    for(let i = 0; i < string.length; i++){
        if(vowels.includes(string[i])){
            count++;
        }
    }
    return count;
}

console.log(`O nome ${name} contém ${countVowels(name.toLowerCase())} vogais`);

