let cep = document.querySelector('#cep');
let endereco = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');


function limparCampos(){
    cep.value = '';
    endereco.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
}

function callback(conteudo){
    if(!('erro' in conteudo)){
        endereco.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
    }else{
        limparCampos();
        alert('CEP não encontrado');
    }
}

function pesquisacep(valor){
    let cep = valor.replace(/\D/g, '');

    if (cep != "") {
        let validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback';
            document.body.appendChild(script);
        } 
        else {
            limparCampos();
            alert("Formato de CEP inválido.");
        }
    }else {
        limparCampos();
    }
};

