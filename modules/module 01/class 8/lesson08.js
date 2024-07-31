let carros = Array() // o array no js (diferentes de algumas linguagens como C) é um objeto, possui métodos

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true 

// o javascript aceita diferentes tipos dentro de uma string - não é comum nas outras linguagens

let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter', 'Percy Jackson']
console.log(carros)

// não é necessário definir o tamanho do array em js

livros.push('Sherlock Holmes') // adiciona elemento no final do array
livros.unshift('1984') // adiciona elemento no início do array
livros.pop() // elimina o elemento na última posição do array
livros.shift() // elima o elemento da primeira posição
livros.splice(2) // elimina o elemento a partir do indice
livros.splice(1, 0, 'Animais Fantásticos') // não irá eliminar nenhum elemento, apenas adicionar 
livros.splice(3, 1, 'Donnie Darko') // substitui o elemento removendo o atual
console.log(livros)

