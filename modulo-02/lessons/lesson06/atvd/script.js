document.getElementById("adiciona").addEventListener("click", () => {
    let item = document.createElement("li");
    let title = document.querySelector("#callback");
    let input = document.querySelector("input");
    let cont = document.querySelector("#cont");
    if (item) {
        if (input.value != "") {
            item.innerHTML = input.value;
            document.querySelector("ul").appendChild(item);
        } else {
            item.innerHTML = "Item vazio";
            document.querySelector("ul").appendChild(item);
        }
        title.innerHTML = "Adicionado com sucesso";
        title.style.color = "green";
        cont.innerHTML = `Total: ${document.querySelectorAll("li").length}`;
    }
    input.focus();
    input.value = "";
});

document.getElementById("remove").addEventListener("click", () => {
    let item = document.querySelector("li");
    let title = document.querySelector("#callback");
    let cont = document.querySelector("#cont");
    if (item == null) {
        title.innerHTML = "Nada para remover";
        title.style.color = "red";
    } else {
        title.innerHTML = "Elemento Removido";
        title.style.color = "red";
        item.remove();
    }
    cont.innerHTML = `Total: ${document.querySelectorAll("li").length}`;
});
