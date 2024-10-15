// let numbers = [1, 2, 3, 4, 5];


// let newNumbers = [...numbers, 6, 7, 8, 9, 10];

// console.log(newNumbers)

// let person = {
//     name: "Neymar",
//     age: 30,
//     work: "Futebol"
// }

// let newPerson = {...person, city: "Xique-xique"};

// console.log(newPerson)


// function soma(...numbers){
//     return numbers.reduce((total, num) => total + num);
// }

// // function somaS(a, b, c){
// //     return a + b + c
// // }

// //console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) 
// //console.log(somaS(...numbers))

// const [a, b, ...rest] = numbers;

// console.log(a, b, rest)


// const {name, ...outrasInfo} = person;

// console.log(name)
// console.log(outrasInfo);


function calculaMedia(...notas) {
    const total = notas.reduce((soma, notas) => soma + notas, 0);
    return total / notas.length;
}

console.log(`A media é: ${calculaMedia(8, 7, 9, 6, 10)}`)

const clienteAntigo = {
    nome: "Joaquim",
    idade: 32,
    email: "joaquin@example.com"
}

const clienteAtualizado = {
    email: "carlos.dev@example.com",
    city: "Xique-xique"
}


const clienteFinal = {...clienteAntigo, ...clienteAtualizado};
console.log(clienteFinal);

let carrinho = ["Produto 1", "Produto 2", "Produto 3"]

let novoCarrinho = [...carrinho, "Produto 4", "Produto 5"];

console.log(novoCarrinho);
