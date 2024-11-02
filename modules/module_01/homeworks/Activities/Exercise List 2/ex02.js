/* 
    Manipulação de Objetos
    2. Verificando Propriedades
        - Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir adicione essa propriedade ao objeto.
*/

let livro = {
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    anoPublicacao: 1813,
    genero: 'Romance'
}

let propriedadeExiste = false;

for(let propriedade in livro){
    if(propriedade === 'editora'){
        propriedadeExiste = true;
        break;
    }
}

if(!propriedadeExiste){
    livro.editora = 'José Olympio'
}

for(let propriedade in livro){
    console.log(`${propriedade} : ${livro[propriedade]}`)
}