let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");
let addTaskBtn = document.getElementById("add-task");

let filterAll = document.querySelectorAll(".filter-btn");

addTaskBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();

    if (taskText) {
        let li = createTaskElement(taskText);
        taskList.appendChild(li);
        taskInput.value = ``;
    }
});

function createTaskElement(text) {
    let li = document.createElement("li");

    li.innerHTML = text;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.id = "remove-btn";
    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(removeBtn);

    let editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.id = "edit-btn";
    editBtn.addEventListener("click", () => editTask(li));

    li.appendChild(editBtn);

    li.addEventListener("click", () => {
        if (!li.classList.contains("editing")) {
            li.classList.toggle("completed");
        }
    });

    return li;
}

function editTask(li) {
    if (!li.classList.contains("editing")) {
        li.classList.add("editing");

        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = li.firstChild.textContent;
        editInput.style.padding = "10px";

        li.firstChild.replaceWith(editInput);

        editInput.addEventListener("blur", () => {
            li.classList.remove("editing");

            let newText = editInput.value.trim();

            if (newText) {
                editInput.replaceWith(document.createTextNode(newText));
            } else {
                li.remove();
            }
        });
        editInput.focus();
    }
}

filterAll.forEach(filter => {
    filter.addEventListener('click', () => {
        filterAll.forEach(f => f.classList.remove('active-filter'))
        filter.classList.add('active-filter')

        let filterType = filter.id
        let allTasks = taskList.querySelectorAll('li')

        allTasks.forEach(task => {
            switch(filterType) {
                case 'filter-all':
                    task.style.display = ''
                    break
                case 'filter-completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none'
                    break
                case 'filter-not-completed':
                    task.style.display = task.classList.contains('completed') ? 'none' : ''
                    break 
            }
        })
    })
})

