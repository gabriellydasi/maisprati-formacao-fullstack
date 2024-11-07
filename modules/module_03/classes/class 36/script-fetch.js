// Exemplo de consumo de API com FETCH

function pesquisaCEP(valor) {
    var cep = valor.replace(/\D/g, ''); // Remove tudo o que não for número

    // Limpa os campos e a mensagem de erro enquanto o usuário digita
    if (cep === "") {
        limpaFormulárioCEP();  // Limpa o formulário se o campo CEP estiver vazio
        displayError(''); // Limpa a mensagem de erro
    }

    if (cep !== "") {
        var validaCEP = /^[0-9]{8}$/;

        if (validaCEP.test(cep)) {
            // Preenche os campos com "..." enquanto consulta a API
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            // Fazendo a requisição usando fetch
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())  // Converte a resposta para JSON
                .then(data => {
                    if (!data.erro) {
                        // Atualiza os campos com os dados da resposta
                        document.getElementById('rua').value = data.logradouro || '';
                        document.getElementById('bairro').value = data.bairro || '';
                        document.getElementById('cidade').value = data.localidade || '';
                        document.getElementById('uf').value = data.uf || '';
                    } else {
                        // CEP não encontrado
                        limpaFormulárioCEP();
                        displayError('CEP não encontrado. Verifique o número e tente novamente.');
                    }
                })
                .catch(() => {
                    // Caso haja erro na requisição
                    limpaFormulárioCEP();
                    displayError('Erro ao buscar o CEP. Tente novamente mais tarde.');
                });
        } else {
            // CEP inválido
            limpaFormulárioCEP();
            displayError('Insira um CEP válido');
        }
    }
}

function displayError(message) {
    document.getElementById('error-message').textContent = message;
}

function limpaFormulárioCEP() {
    // Limpa valores do formulário de CEP
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}

// Adicionando o evento de input para limpar os campos enquanto digita
document.getElementById('cep').addEventListener('input', function(event) {
    pesquisaCEP(event.target.value);
    // Limpa a mensagem de erro enquanto o usuário digita
    displayError('');
});
