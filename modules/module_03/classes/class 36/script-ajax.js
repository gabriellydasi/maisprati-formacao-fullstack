// Função que realiza a busca do endereço utilizando a API do ViaCEP com o método AJAX 

function getAdress(cep) {
    // Expressão regular para remover caracteres não numéricos (REGEX)
    cep = cep.replace(/\D/g, ''); // Remove todos os caracteres que não são números

    // Verifica se o CEP tem o comprimento correto (8 dígitos)
    if (cep.length !== 8) {
        clearFields(); // Limpa os campos do formulário
        displayError('Insira um CEP válido'); // Exibe a mensagem de erro para CEP inválido
    } else {
        displayErrorDelete(); // Remove qualquer mensagem de erro anterior

        // Define a URL da API do ViaCEP para fazer a consulta
        let url = 'https://viacep.com.br/ws/' + cep + '/json/';

        // Cria um objeto XMLHttpRequest para enviar a requisição
        const xmlHttp = new XMLHttpRequest();

        // Configura a requisição para o método GET, passando a URL
        xmlHttp.open('GET', url, true); // Método GET | URL da API | Requisição assíncrona

        // Define a função que será chamada sempre que o estado da requisição mudar
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4) { // Quando a requisição for concluída (readyState = 4 | DONE)
                if (xmlHttp.status === 200) { // Se o status da requisição for 200 (sucesso)
                    // Converte a resposta JSON em um objeto JavaScript
                    let data = JSON.parse(xmlHttp.responseText); // Resposta da API

                    // Verifica se o CEP foi encontrado na API (campo 'erro')
                    if (data.erro) {
                        clearFields(); // Limpa os campos se o CEP não for encontrado
                        displayError('CEP não encontrado. Verifique o número e tente novamente.');
                    } else {
                        // Preenche os campos com os dados do endereço retornados pela API
                        document.getElementById('rua').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('uf').value = data.uf;
                    }
                }
            }
        }
        // Envia a requisição para a API
        xmlHttp.send();
    }
}

// Função para exibir a mensagem de erro no caso de CEP inválido
function displayError(message) {
    document.getElementById('error-message').textContent = message; // Atualiza a mensagem de erro
}

// Função para apagar a mensagem de erro
function displayErrorDelete() {
    document.getElementById('error-message').textContent = ''; // Limpa a mensagem de erro
}

// Função para limpar todos os campos de endereço
function clearFields() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

// Evento para limpar a mensagem de erro enquanto o usuário digita
document.getElementById('cep').addEventListener('input', function(event) {
    const cepValue = event.target.value.trim(); // Obtém o valor digitado no campo de CEP e remove espaços extras

    // Se o campo de CEP estiver vazio, apaga a mensagem de erro
    if (cepValue === '') {
        displayErrorDelete();
    }
    // Caso o campo não esteja vazio, apaga qualquer erro existente
    else {
        displayErrorDelete();
    }
});

// Evento para verificar o CEP ao perder o foco (blur) no campo
document.getElementById('cep').addEventListener('blur', function(event) {
    const cepValue = event.target.value.trim(); // Obtém o valor do campo e remove espaços extras

    // Se o campo de CEP não estiver vazio, realiza a busca do endereço
    if (cepValue !== '') {
        getAdress(cepValue);
    } else {
        // Se o campo de CEP estiver vazio, apaga qualquer mensagem de erro
        displayErrorDelete();
    }
});
