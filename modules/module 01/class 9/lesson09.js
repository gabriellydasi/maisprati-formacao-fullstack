// # Array
/* Um array é uma estrutura de dados linear que aloca na memória um espaço delimitado de valores tipados, valores de mesmo tipo e endereços lineares na memória

No javascript é um pouco diferente, o array é considerado um objeto que tem sua própria estrutura - diferente do padrão. A linguagem já tem alguns métodos prontos, bem como aceitam mais coisas - por exemplo: diferentes tipos de dados em um mesmo array , adição, exclusão e diversas outras tentativas de filtragem e mapeamento. Além disso, não é necessário fazer tipagens das variáveis. */

// # Colocando o conceito em prática com exercícios (disponível na pasta 'activities')

/* Arrays/Vetores multidimensionais */
/* let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.table(matriz) // exibe os valores da matriz em formato de tabela
console.log(matriz[0][2]) // exibe o valor dentro da primeira linha no índice 2

// Fazer um exemplo utilizando: console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
        console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
    }
}*/

/* Soma de Matrizes 
let matrizA = [
    [1, 2, 3],
    [4, 5, 6]
]

let matrizB = [
    [6, 5, 4],
    [3, 2, 1]
]

if(matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length){ // Validação dos arrays 
    throw new Error('Os arrays devem ter o mesmo tamanho') // mensagem de erro no terminal 
}else{
    let resultado = []

    for(let i = 0; i < matrizA.length; i++){
        let somaLinha = []
        for(let j = 0; j < matrizA[i].length; j++){
            somaLinha.push(matrizA[i][j] + matrizB[i][j])
        }
        resultado.push(somaLinha)
    }
    console.table(resultado)
}*/









