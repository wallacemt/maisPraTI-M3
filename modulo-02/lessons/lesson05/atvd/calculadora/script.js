function inserir(valor) {
    let tela = document.getElementsByName('tela')[0];
    if(tela.value.length < 14){
        if(isOperador(valor) && isOperador(tela.value[tela.value.length - 1])){
            return;
        }
    }
    tela.value += valor;
}

function isOperador(char){
    return ['+', '-', '*', '/', '.'].includes(char);
}

function limpar() {
    document.getElementsByName('tela')[0].value = '';
}

function deletar() {
    document.getElementsByName("tela")[0].value = document.getElementsByName("tela")[0].value.slice(0, -1);
}

function calcularTotal() {
    let tela = document.getElementsByName('tela')[0];
    const expresion = tela.value;
    if(expresion && !isOperador(expresion[expresion.length - 1])){
        try{
            let resultado = calcularExpresao(expresion);
            tela.value = resultado
        }catch{
            alert("Expressão inválida");
            limpar();
        }
    }
}

function calcularExpresao(expresao) {
    return eval(expresao);
}
