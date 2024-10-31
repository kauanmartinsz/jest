const calculator = require('../src/calculator');
const testResults = [];

// Seus testes existentes aqui...

// Novos testes para a função generateRandomNumber
test('deve gerar número aleatório entre 0 e 10 para entrada menor que 10', () => {
    const input = 5;
    const result = calculator.generateRandomNumber(input);
    testResults.push({ 
        title: 'Número Aleatório (0-10)', 
        status: (result >= 0 && result <= 10) ? 'PASS' : 'FAIL', 
        message: `Entrada: ${input}, Saída: ${result}`
    });
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
});

test('deve gerar número aleatório entre 100 e 1000 para entrada maior ou igual a 10', () => {
    const input = 15;
    const result = calculator.generateRandomNumber(input);
    testResults.push({ 
        title: 'Número Aleatório (100-1000)', 
        status: (result >= 100 && result <= 1000) ? 'PASS' : 'FAIL', 
        message: `Entrada: ${input}, Saída: ${result}`
    });
    expect(result).toBeGreaterThanOrEqual(100);
    expect(result).toBeLessThanOrEqual(1000);
});