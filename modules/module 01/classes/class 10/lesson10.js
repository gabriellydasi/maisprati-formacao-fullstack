/*let thingsList = Array() // Iniciando um array 

thingsList['Hardware'] = Array() // Iniciando um array em formato de string
thingsList['Fruits'] = Array()
thingsList['People'] = Array('Aristóteles', 'Tolkien', 'Batman') // É possível adicinar elementos no array sem precisar definir os índices - como o exemplo abaixo 

thingsList['Hardware'][0] = 'Notebook' 
thingsList['Hardware'][1] = 'Mouse'
thingsList['Hardware'][2] = 'Keyboard'
thingsList['Fruits'][0] = 'Orange'
thingsList['Fruits'][1] = 'Apple'
thingsList['Fruits'][2] = 'Strawberry'

console.table(thingsList)
console.table(thingsList['Hardware'])
console.table(thingsList['Fruits'])*/

/*let fruitList = Array()
// let fruitList = [] // Outra maneira de criar um array 

fruitList[0] = 'Apple'
fruitList[1] = 'Banana'
fruitList[2] = 'Watermelon'
fruitList[3] = 'Strawberry'
fruitList[4] = 'Strawberry'

console.log(fruitList)
console.log(fruitList.indexOf('Strawberry')) // Retorna a posição do argumento

let index = fruitList.indexOf('Strawberry')

if(index === -1){
    console.log('O elemento não existe')
}else{
    console.log(`O elemento existe e está no posição ${index}`) // Retorna somente o primeiro encontro
}

console.log(fruitList.sort()) // Lista ordenada


let numberList = [10, 12, 0, 16, 7, 9]

console.log(numberList.sort((a, b) => a - b)) */ // Passagem de uma função como parâmetro, utilizado para ordenar números.'a' e 'b' são tratados como índices. Retorna true se o resultado for positivo (a > b)

// # Funções
/* Definição: Bloco de código reutilizável que executa uma tarefa específica ou um conjunto de tarefas. As funções permitem que você organize seu código em partes menores e mais gerenciáveis, além de facilitar a reutilização e a manutenção do código. */

/* function calculateArea(num1, num2){
    let area = num1 * num2 // area é uma variável de bloco
    return area 
}

let width = 50
let heigth = 100
let area = calculateArea(width, heigth)

calculateArea(width, heigth)
console.log(`A área possui ${area} m²`)*/

// 'var area' define uma variável de escopo global 

/* Existem 2 tipos de passagem de parâmetro: Valor e Referência 

Referência: Passa o endereço da memória em que aquela variável está deslocada. Tudo que fizer dentro da função com aquela variável irá mudar a variável original 

Valor: Cópia de valor e não de referência */

// # Uma função que ordene um array em ordem alfabética 

/* fruitList = ['Apple', 'Watermelon', 'Strawberry', 'Banana', 'Grape', 'Blueberry']

function sortFunc(list){
    return list.sort()
}

console.log(sortFunc(fruitList))*/