/*
    Combinação de Estruturas
    12. Atualizando um Array de Objetos
        - Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

const objetosEstoque = [
    {produto: 'Creme dental', quantidade: 24, minimo: 25},
    {produto: 'Álcool em gel', quantidade: 80, minimo: 20},
    {produto: 'Algodão', quantidade: 30, minimo: 40},
    {produto: 'Escova dental', quantidade: 50, minimo: 25}
] 

objetosEstoque.forEach(objetos => {
    if(objetos.quantidade < objetos.minimo){
        objetos.quantidade *= 2
    }
})

console.log(objetosEstoque)