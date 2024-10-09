function fazerPedido(tipo){
    return new Promise((resolve, reject) => {
        let tempoDePreparo;

        if(tipo == "expresso"){
            tempoDePreparo = 2000;
        }else if(tipo == "latte"){
            tempoDePreparo = 3000;
        }else{
            reject("Café não disponivel");
            return;
        }

        setTimeout(() => {
            resolve(`Seu ${tipo} está pronto`);
        }, tempoDePreparo);
    })
}

async function realizarPedido(tipo) {
    try{
        const resultado = await fazerPedido(tipo);
        console.log(resultado);
    }catch(erro){
        console.log(erro);
    }
}


realizarPedido("expresso");

realizarPedido("latte");

realizarPedido("capuccino");