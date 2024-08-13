/* 
    Objetivo: Verificar e listar livros publicados antes dos anos 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

const library = [
    { title: 'The Hobbit', author: 'J. R. R. Tolkien', year: 1925 },
    { title: 'Harry Potter: Prisoner of Azkaban', author: 'J. K. Rolling', year: 1999 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 }
];

for (let book of library){ // for...of é mais utilizado que o for..in, por ser mais fácil de percorrer arrays
    if (book.year < 2000) {
        console.log(`The book '${book.title}' written by ${book.author}, was published in ${book.year}.`)
    }
}

