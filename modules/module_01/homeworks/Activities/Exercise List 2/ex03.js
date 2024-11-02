/* 
    Manipulação de Objetos
    3. Filtrando Propriedades de Objetos
        - Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.
*/

let produto = {
    nome: 'Cadeira',
    preco: 250,
    peso: 15,
    altura: 1.2,
    estoque: 10
};

// Função para filtrar propriedades maiores que um valor específico
function filtrarPropriedades(objeto, valorEspecifico){
    let novoObjeto = {}; // Novo objeto para armazenar as propriedades filtradas
    
    // Usando for...in para percorrer as propriedades do objeto
    for(let propriedade in objeto){
        if(objeto[propriedade] > valorEspecifico){  // Verifica se o valor da propriedade é maior que o valorEspecifico
            novoObjeto[propriedade] = objeto[propriedade]; // Adiciona a propriedade ao novo objeto
        }
    }
    
    return novoObjeto;  // Retorna o novo objeto filtrado
}

// Chamando a função e passando o objeto produto e o valor específico (por exemplo, 10)
let resultado = filtrarPropriedades(produto, 10);

console.log(resultado);