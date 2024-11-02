// 5) Formatar data

let date = new Date(2024, 7, 7);

let options = { 
    day: 'numeric', 
    month: 'long',  // escreve por extenso (mês 8 = agosto)
    year: 'numeric' 
};

let formattedDate_Port = date.toLocaleDateString('pt-BR', options);
let formattedDate_Engl = date.toLocaleDateString('en', options);

console.log(formattedDate_Port);
console.log(formattedDate_Engl);



