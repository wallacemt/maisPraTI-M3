let meuForms = document.getElementById("form");
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

meuForms.addEventListener("submit" , (event) => {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("year").value;
    let mes = document.getElementById("month").value;
    let dia = document.getElementById("day").value;
    let tipo = document.getElementById("type").value;
    let descricao = document.getElementById("description").value;

    let tarefa = {
        titulo,
        ano,
        mes,
        dia,
        tipo,
        descricao,
        completed: false
    }

    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    alert("Tarefa salva com sucesso");
    meuForms.reset();
})

