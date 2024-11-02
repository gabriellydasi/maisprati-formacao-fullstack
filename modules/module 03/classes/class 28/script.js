let botaoAdicionarTarefa = document.getElementById('adicionarTarefa')
let text = document.getElementById('inputText')
let list = document.getElementById('list')

function addItem(){
    let novoItem = document.createElement('li')
    novoItem.innerHTML = text.ariaValueMax

    list.appendChild(novoItem)

}

botaoAdicionarTarefa.addEventListener('click', addItem)

