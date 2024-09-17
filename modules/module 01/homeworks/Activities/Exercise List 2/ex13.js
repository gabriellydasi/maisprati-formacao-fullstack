/*
    Combinação de Estruturas
    13. Implementando um Carrinho de Compras
        - Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.
*/

const carrinho = {
    itens: [
        {nome: 'Pão', quantidade: 10, precoUnitario: 1.20},
        {nome: 'Maçã', quantidade: 6, precoUnitario: 2.50},
        {nome: 'Leite', quantidade: 3, precoUnitario: 3.00},
    ]
}

let valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario
})

console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`)