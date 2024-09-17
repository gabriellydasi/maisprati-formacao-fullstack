/* 
    Manipulação de Arrays de Objetos com 'forEach'
    7. Modificando Objetos em um Array
        - Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.
*/

const produtos = [
    {nome: 'Notebook', preco: 4300, desconto: 0},
    {nome: 'Headset', preco: 800, desconto: 0},
    {nome: 'Smartphone', preco: 1600, desconto: 0},
    {nome: 'Teclado', preco: 300, desconto: 0},
]

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10
    let novoPreco = produto.preco - produto.desconto
    console.log(`Produto: ${produto.nome}\nNovo Preço: R$ ${novoPreco.toFixed(2)}\n`)
})