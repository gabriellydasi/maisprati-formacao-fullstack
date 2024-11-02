// Objetos: Podem classificar todas as identificações de substantivos

// let serie = {
//     nome: 'The Boys', // chave e valor
//     genero: 'Ação, Paródia, Heróis',
//     nrTemporadas: 4,
//     status: 'Em andamento', 
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10, 
//         temp2:10,
//         temp3: 50
//     },

//     mostrarCaracteristicas: function() { // Função dentro do objeto 'serie'
//         return `O nome da série é: ${this.nome} e a sua classificação é +${this.classificacao}`
//     }
// }

// console.log(serie.mostrarCaracteristicas())

// let livro = {
//     titulo: 'Orgulho e Preconceito',
//     autora: 'Jane Austen',
//     genero: 'Romance',
//     ano: 1813,
//     capitulos: 61,
//     paginas: 432,
//     status: 'Lido',

//     mostrarStatus: function(){
//         return `Li o livro '${this.titulo}' da autora ${this.autora}.`
//     }
// }

// console.log(livro.mostrarStatus())

// let carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2024,
//     cor: 'Preto',
//     tipo: 'Sedan',
//     status: 'Disponível',

//     mostrarInformacao: function(){
//         return `Temos disponível um carro da marca ${this.marca} de modelo ${this.modelo} lançado no ano de ${this.ano}`
//     }
// }

// console.log(carro.mostrarInformacao())

// let motor = '1000'
// let nome = 'bmw s1000rr'
// let tipo = 'esportiva'

// let moto = {
//     nome: nome, 
//     tipo: tipo, 
//     motor: motor
// }

// console.log(moto)

// let atleta = {
//     nome: 'Rayssa Leal',
//     esporte: 'Skate street',
//     idade: 16
// }

// atleta.nacionalidade = 'Brasil'
// atleta.medalhas = {
//     outro: 10,
//     prata: 2,
//     bronze: 1
// }

// atleta.celebrarVitoria = () => { return 'GANHEI!' }

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: 'Bruce',
//     profissao: 'Batman'
// }

// let obj2 = obj1 

// obj2.companheiro = 'Robin'

// console.log(obj1)
// console.log(obj2)

// Se atribuir um objeto a uma nova variável, isso irá transferir a referência de memória do objeto. Tudo que alterar no obj2 irá influenciar no obj1 e vice versa 

// # Função Construtora
// Uma função construtora é uma maneira tradicional de criar objetos em JavaScript usando a palavra-chave new. Ela é usada como um "molde" para criar novos objetos, similar a uma classe.

// Exemplo de Função Construtora

// function computador(processador, gpu, ram, armazenamento) { 
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function() {
//         console.log(`O ${this.processador} está funcionando!`)
//     }

//     this.mostrarEspecificacoes = function() {
//         return `
//             processador: ${this.processador}
//             gpu: ${this.gpu}
//             ram: ${this.ram}
//             armazenamento: ${this.armazenamento}`
//     }
// } 
// Criando objetos usando a função construtora
// let pc = new computador('i9', 'RTX4090', '16GB', '500GB SSD')
// console.log(pc.mostrarEspecificacoes())

// #Função Fábrica
// Uma função fábrica é uma função qualquer que retorna um novo objeto. Não utiliza a palavra-chave new, e pode ser mais flexível e fácil de entender para iniciantes.

// Exemplo de Função Fábrica

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo1 = jogos('Final Fantasy', 'RPG', '1997', 'Square Soft', () => console.log('Jogando'))

// console.log(jogo1)
// console.log(jogo1.jogar())

// # Demais estruturas de repetição (for in, for each, for of)

// A diferença entre for...in e for...of reside no que cada um itera e no contexto em que são mais adequados para uso. 

// for...in
// Propósito: Iterar sobre as propriedades enumeráveis de um objeto.
// Uso: Principalmente para objetos, onde você precisa acessar as chaves (propriedades) do objeto.
// Exemplo:
let pessoa = { 
    nome: "Alice", 
    idade: 30, 
    cidade: "São Paulo" };

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// for...of
// Propósito: Iterar sobre valores de objetos iteráveis (como arrays, strings, mapas, sets e objetos que implementam o protocolo iterável).
// Uso: Principalmente para arrays, strings, mapas, sets e outros iteráveis, onde você precisa acessar os valores.
// Exemplo:
let numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero);
}

// let carros = {
//     modelo: 'Buggati',
//     ano: 2010,
//     cor: 'Laranja'
// }

// for(let key in carros){
//     console.log(`${key} : ${carros[key]}`)
// }

const nome = 'Silva'

for(let char of nome){ // usado em estruturas interáveis
    console.log(char)
}

const jogadores = [['Pelé', 'Romário'], 'CR7', 'Messi']

for(let jogador of jogadores){ // acesso diretamente ao item
    console.log(jogador)
}

for(let jogo of Object.keys(jogo1)){  //transforma o objeto em interável
    console.log(jogo1[jogo])
}

// Iterar os objetos que criamos com 'for in' e 'for of' (activities)

