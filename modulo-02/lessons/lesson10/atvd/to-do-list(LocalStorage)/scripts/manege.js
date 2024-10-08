function getTarefas() {
    return JSON.parse(localStorage.getItem("tarefas")) || [];
}
function saveTarefas(tarefas) {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
    let tarefas = getTarefas();
    let tableList = document.getElementById("list");

    tableList.innerHTML = '';

    tarefas.forEach((task) => {
        let tr = document.createElement("tr"); 

        if (task.completed == true) {
            tr.classList.add("completed");
        }
        let tdTitulo = document.createElement("td");
        tdTitulo.textContent = task.titulo;
        tr.appendChild(tdTitulo);

        let tdData = document.createElement("td");
        tdData.textContent = `${task.dia}/${task.mes}/${task.ano}`;
        tr.appendChild(tdData);

        let tdTipo = document.createElement("td");
        tdTipo.textContent = task.tipo;
        tr.appendChild(tdTipo);

        let tdDescricao = document.createElement("td");
        tdDescricao.textContent = task.descricao;
        tr.appendChild(tdDescricao);

        let tdAcoes = document.createElement("td");
        
        let btnDelete = document.createElement("button");
        btnDelete.className = "delete";
        btnDelete.textContent = "Delete";

        btnDelete.onclick = () => {

            deleteTarefa(task);
        };
        tdAcoes.appendChild(btnDelete);
        

        let btnComplete = document.createElement("button");
        btnComplete.className = "complete";
        btnComplete.textContent = "Complete";
        btnComplete.onclick = () => {
            completeTarefa(task);
        };
        tdAcoes.appendChild(btnComplete);

        tr.appendChild(tdAcoes); 
        tableList.appendChild(tr); 
    });
}

function deleteTarefa(taskToDelete) {
    let tarefas = getTarefas();
    tarefas = tarefas.filter(task => task.titulo !== taskToDelete.titulo);
    saveTarefas(tarefas);
    renderizarTarefas();
}

function completeTarefa(task) {
    let tarefas = getTarefas();
    tarefas = tarefas.map((taskToComplete) => {
        if (taskToComplete.titulo === task.titulo) {
            return {
                ...taskToComplete,
                completed: !taskToComplete.completed
            }
        }
        return taskToComplete;
    });
    saveTarefas(tarefas);
    renderizarTarefas();
}

window.onload = () => {
    renderizarTarefas();
}