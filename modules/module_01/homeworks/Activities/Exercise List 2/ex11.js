/* 
    Combinação de Estruturas
    11. Agrupando Elementos com forEach
        - Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
*/

const pedidos = [
    {cliente: 'Ana', produto: 'Caderno', quantidade: 5},
    {cliente: 'Ana', produto: 'Caneta', quantidade: 4},
    {cliente: 'Maria', produto: 'Corretivo', quantidade: 1},
    {cliente: 'Carlos', produto: 'Borracha', quantidade: 2},
]

const agrupamento = {}

pedidos.forEach(pedido => {
        // Verifica se o cliente já está no objeto de agrupamento
        if (agrupamento[pedido.cliente]) {
            // Se já estiver, soma a quantidade ao valor existente
            agrupamento[pedido.cliente] += pedido.quantidade
        } else {
            // Caso contrário, adiciona o cliente com a quantidade atual
            agrupamento[pedido.cliente] = pedido.quantidade
        }
    })
    
console.log(agrupamento)
