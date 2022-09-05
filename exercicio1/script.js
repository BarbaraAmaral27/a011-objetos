// # Exercício 1
// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

const objeto1 = {
    nome: "Maracujá",
    preco: 4.00,
    disponibilidade: true
}

const objeto2 = {
    nome: "Abacaxi",
    preco: 5.00,
    disponibilidade: true
}

const objeto3 = {
    nome: "Banana",
    preco: 2.00,
    disponibilidade: true
}

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(objeto1,objeto2,objeto3)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao)