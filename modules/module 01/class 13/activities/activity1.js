/* 
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média de aprovação. 
    Use um loop for...in para iterar sobre as propriedades dentro de professor.grades. 
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média).
*/

const professor = {
    name: 'Isaac Newton',
    subject: 'Physics',
    grades: {
        student1: 10.0,
        student2: 6.2,
        student3: 4.3,
        student4: 5.6,
        student5: 7.8, 
        student6: 9.5
    }
};

let sumGrades = 0;
let numberOfStudents = 0;

for (let student in professor.grades){
    sumGrades += professor.grades[student];
    numberOfStudents++;
}

let average = sumGrades / numberOfStudents;

console.log(average >= 6.0 // Opção com Operador Ternário
    ? `Class average: ${average.toFixed(2)}\nProfessor ${professor.name} is above average.` 
    : `Class average: ${average.toFixed(2)}\nProfessor ${professor.name} is bellow average.`
);

if (average >= 6.0){ // Estrutura if-else
    console.log(`Class average: ${average.toFixed(2)}\nProfessor ${professor.name} is above average.`);
} else {
    console.log(`Class average: ${average.toFixed(2)}\nProfessor ${professor.name} is bellow average.`);
} 