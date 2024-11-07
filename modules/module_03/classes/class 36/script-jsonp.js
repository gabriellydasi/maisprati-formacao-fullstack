// Exemplo de consumo de API com JSONP (método antigo), 
// aparece no próprio site do consultacep

function limpaFormulárioCEP() {
    // Limpa valores do formulário de CEP
    document.getElementById('rua').value="";
    document.getElementById('bairro').value="";
    document.getElementById('cidade').value="";
    document.getElementById('uf').value="";
}

function pesquisaCEP(valor) {
    // Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    // Verifica se campo CEP possui valor informado.
    if (cep != "") {
        //Expressão regular para validar o CEP.
        var validaCEP = /^[0-9]{8}$/;

        // Valida o formato do CEP
        if (validaCEP.test(cep)) {
            // Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value ="...";
            document.getElementById('bairro').value= "...";
            document.getElementById('cidade').value= "...";
            document.getElementById('uf').value ="...";

            // Cria o elemento javascript
            var script = document.createElement('script');

            // Sincroniza com o callback
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meuCallback';

            // Insere script no documento e carrega o conteúdo
            document.body.appendChild(script);
        } else {
            // cep é inválido
            limpaFormulárioCEP();
            displayError('Insira um CEP válido'); 
        }
    } else {
        // CEP sem valor, limpa formulário
        limpaFormulárioCEP();
    }
}

function meuCallback(conteudo) {
    if (!("erro" in conteudo)) {
        // Atualiza os campos com os valores
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } else {
        // CEP não encontrado
    }
}

function displayError(message) {
    document.getElementById('error-message').textContent = message;
}