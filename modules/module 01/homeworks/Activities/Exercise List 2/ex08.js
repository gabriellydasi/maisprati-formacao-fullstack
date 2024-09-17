/* 
    Manipulação de Arrays de Objetos com 'forEach'
    8. Criando Novos Arrays a Partir de Objetos
        - Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.
*/

const filmes = [
    {titulo: 'Donnie Darko', diretor: 'Richard Kelly', anoLancamento: 2001},
    {titulo: 'O Exterminador do Futuro', diretor: 'James Cameron', anoLancamento: 1984},
    {titulo: 'Laranja Mecânica', diretor: '	Stanley Kubrick', anoLancamento: 1971}
]

let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)