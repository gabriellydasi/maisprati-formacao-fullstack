/* 
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem.
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/ 

const movies = [
    { title: 'The Terminator', genre: 'Sci-Fi' },
    { title: 'Donnie Darko', genre: 'Sci-Fi'},
    { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy' },
    { title: 'Harry Potter: Prisoner of Azkaban', genre: 'Fantasy'},
    { title: 'Top Gun', genre: 'Action' },
    { title: 'Gone Girl', genre: 'Crime Romance' }
];

let genreCount = {}; // Objeto vazio

// Método forEach (apenas para arrays)
movies.forEach(movie => { // Função anônima (arrow)
    if (genreCount[movie.genre]){
        genreCount[movie.genre]++;
    } else {
        genreCount[movie.genre] = 1;
    }
});

for (let genre in genreCount) {
    console.log(genreCount[genre] !== 1
        ? `There are ${genreCount[genre]} movies in the ${genre} genre.`
        : `There is ${genreCount[genre]} movie in the ${genre} genre.`
    );
}