/* Estruturas de Dados */

// Lista simples encadeada 
// Primeiro nó = head
// Utilizando classes que representam nós

class Node { // Definição de um nó 
    constructor(data){
        this.data = data // dados
        this.next = null // next = ponteiro para o próximo elemento, começa com null pois inicialmente não está apontada para valor algum
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(data) { // adicionando método
        let newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }

            current.next = newNode
        }

        this.size++
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return console.log('Index fora dos limites!')
        } 

        let newNode = new Node(data)
        let current = this.head
        let previous

        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }

        this.size++
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return console.log('Index fora dos limites!')
        } 

        let current = this.head
        let previous 

        if (index === 0) {
            this.head = current.next
        } else {
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
        return current.data
    }

    printList() {
        let current = this.head
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList()

list.add('Formação +praTi')
list.add(true)
list.add('Elemento3')
list.add('Gabrielly')
list.printList()


