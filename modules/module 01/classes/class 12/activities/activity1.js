// Iterar os objetos criados com 'for in' e 'for of'

// 1) Livro
let livro = {
    titulo: 'Orgulho e Preconceito',
    autora: 'Jane Austen',
    genero: 'Romance',
    ano: 1813,
    capitulos: 61,
    paginas: 432,
    status: 'Lido',

    mostrarStatus: function() {
        return `Li o livro '${this.titulo}' da autora ${this.autora}.`
    }
}

// Usando 'for...in' para iterar sobre as propriedades do objeto 'livro'
for (let propriedade in livro) {
    console.log(`${propriedade}: ${livro[propriedade]}`);
}

// Usando 'for...of' com Object.keys() para iterar sobre as chaves do objeto 'livro'
for (let chave of Object.keys(livro)) {
    console.log(`${chave}: ${livro[chave]}`);
}

// Usando 'for...of' com Object.values() para iterar sobre os valores do objeto 'livro'
for (let valor of Object.values(livro)) {
    console.log(valor);
}

// Usando 'for...of' com Object.entries() para iterar sobre os pares de chave-valor do objeto 'livro'
for (let [chave, valor] of Object.entries(livro)) {
    console.log(`${chave}: ${valor}`);
}


// 2) Carro
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2024,
    cor: 'Preto',
    tipo: 'Sedan',
    status: 'Disponível',

    mostrarInformacao: function() {
        return `Temos disponível um carro da marca ${this.marca} de modelo ${this.modelo} lançado no ano de ${this.ano}`;
    }
}

// Usando 'for...in' para iterar sobre as propriedades do objeto 'carro'
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Usando 'for...of' com Object.keys() para iterar sobre as chaves do objeto 'carro'
for (let chave of Object.keys(carro)) {
    console.log(`${chave}: ${carro[chave]}`);
}

// Usando 'for...of' com Object.values() para iterar sobre os valores do objeto 'carro'
for (let valor of Object.values(carro)) {
    console.log(valor);
}

// Usando 'for...of' com Object.entries() para iterar sobre os pares de chave-valor do objeto 'carro'
for (let [chave, valor] of Object.entries(carro)) {
    console.log(`${chave}: ${valor}`);
}