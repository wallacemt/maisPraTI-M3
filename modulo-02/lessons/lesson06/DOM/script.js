let titulo = document.getElementById("title")
console.log(titulo.textContent);

titulo.textContent = "Aula de JS Basico";
console.log(titulo.textContent);

titulo.innerHTML = "Mudei Novamente"

titulo.style.color = 'blue';

let botao = document.getElementById("botao");

botao.addEventListener('click', () =>{
    console.log("Clicou");
})

let novoParagrado = document.createElement('p');
novoParagrado.innerHTML = "Novo Paragrafo";

document.body.appendChild(novoParagrado)

let paragrafo = document.querySelector(".paragrafo");

paragrafo.remove()