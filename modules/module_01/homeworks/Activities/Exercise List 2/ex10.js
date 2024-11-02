/* 
    Combinação de Estruturas
    10. Criando Relatórios com Objetos e Arrays
        - Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.
*/

const vendas = [
    {produto: 'Notebook', quantidade: 10 , valor: 3600},
    {produto: 'Smartphone', quantidade: 15 , valor: 2100},
    {produto: 'Headset', quantidade: 8, valor: 500},
    {produto: 'Impressora', quantidade: 4, valor: 2000}
]

let valorTotal = 0

vendas.forEach(venda => {
    let valorVenda = venda.quantidade * venda.valor
    valorTotal += valorVenda 
})

console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`)