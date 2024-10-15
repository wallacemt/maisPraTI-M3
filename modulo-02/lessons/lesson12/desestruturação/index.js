let numbers = [10, 20, 40, 11];

const [first, second, third] = numbers;

// console.log(first, second, third);


let person = {
    name: 'João',
    age: 30,
    work: 'Developer'
}

const { name, age, work } = person;

// console.log(name, age, work)

const {name: myName, age: myAge, work: myWork, city = "Salvador"} = person;

// console.log(myName, myAge, myWork, city);

// Com base no array: num = [10, 20, 30, 40, 50,60].
//Use a destruturação para atribuir valores as variaveis a, b, c

let num = [10, 20, 30, 40, 50,60];

const [a, b, c] = num;

console.log(a, b, c);

const developer = {
    nome: "Julia",
    idade: 22,
    contato: {
        email: "julia@dev.com",
        endereco: {
            cidade: "Salvador",
            estado: "BA",
            pais: "Brasil"
        }
    },
    projetos: ["Website", "App Mobile", "API"]
}

const {nome: userName,  idade: userAge} = developer;
console.log(userName, userAge)

const {contato: {email: userEmail}} = developer;
console.log(userEmail)

const {contato: {endereco: {cidade: userCity, estado: userState, pais: userCountry}}} = developer;
console.log(userCity, userState, userCountry)

const {projetos: [Website, appMobile, API]} = developer;
console.log(Website, appMobile, API)