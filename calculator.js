// src/calculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}

// Função para gerar número aleatório
function generateRandomNumber(value) {
    if (value < 10) {
        return Math.floor(Math.random() * 11); // 0-10
    } else {
        return Math.floor(Math.random() * 901) + 100; // 100-1000
    }
}

// Exportando todas as funções
module.exports = { add, subtract, multiply, divide, generateRandomNumber };