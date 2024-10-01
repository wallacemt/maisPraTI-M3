// let form = document.getElementById("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let year = document.getElementById("year").value;
//     let month = document.getElementById("month").value;
//     let day = document.getElementById("day").value;
//     let type = document.getElementById("type").value;
//     let description = document.getElementById("description").value;
//     let list = JSON.parse(localStorage.getItem("list")) || [];
//     list.push({ year, month, day, type, description });
//     localStorage.setItem("list", JSON.stringify(list));
// })



// if(window.location.href.indexOf("manegetment.html") !== -1){
//         let list = JSON.parse(localStorage.getItem("list"));
//         let listBody = document.getElementById("list");
//         let tr = document.createElement("tr");
//         let tdYear = document.createElement("td");
//         let tdMonth = document.createElement("td");
//         let tdDay = document.createElement("td");
//         let tdType = document.createElement("td");
//         let tdDescription = document.createElement("td");
//         let tdActions = document.createElement("td");

//         if (!list) {
//             return;
//         }else{
//             for (let i = 0; i < list.length; i++) {
//                 let tr = document.createElement("tr");
//                 let tdYear = document.createElement("td");
//                 let tdMonth = document.createElement("td");
//                 let tdDay = document.createElement("td");
//                 let tdType = document.createElement("td");
//                 let tdDescription = document.createElement("td");
//                 let tdActions = document.createElement("td");
//                 tdYear.appendChild(document.createTextNode(list[i].year));
//                 tdMonth.appendChild(document.createTextNode(list[i].month));
//                 tdDay.appendChild(document.createTextNode(list[i].day));
//                 tdType.appendChild(document.createTextNode(list[i].type));
//                 tdDescription.appendChild(document.createTextNode(list[i].description));
//                 tdActions.innerHTML = "<button type='button' class='remove'>Remove</button>";
//                 tr.appendChild(tdYear);
//                 tr.appendChild(tdMonth);
//                 tr.appendChild(tdDay);
//                 tr.appendChild(tdType);
//                 tr.appendChild(tdDescription);
//                 tr.appendChild(tdActions);
//                 listBody.appendChild(tr);
//             }
//         }
// }