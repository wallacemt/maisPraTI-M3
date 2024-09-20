let myWindow;

function openWin() {
    myWindow = window.open("","myWindow","width=300,height=300");
    myWindow.document.write("<p>Nova Janela Aberta!</p>");

    myWindow.document.write("Largura disponível: " + window.screen.availWidth + 'px <br>');
    myWindow.document.write("Altura disponível: " + window.screen.availHeight + 'px <br>');
}

function closeWin() {
   if(myWindow) {
       myWindow.close();
   }
}



// window.setTimeout(() => {
//     document.write("Ola mundo")
// }, 3000)
// let i = 10;

// let j = window.setInterval(() => {
//     document.write(i + '<br>')
//     i--
//     if(i == 0) {
//         window.clearInterval(j);
//         document.write("Acabou");
//     }
// }, 1000)

function redirectTo(url) {
    window.location.href = url;
}