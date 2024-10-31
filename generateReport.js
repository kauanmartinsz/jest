const fs = require('fs');

// Função para gerar relatório dos testes
function generateReport(testResults) {
    const content = `
# Relatório de Testes

## Resultados dos Testes

${testResults.map(result => `
### ${result.title}
- **Resultado:** ${result.status}
- **Mensagem:** ${result.message}
`).join('\n')}

## Resumo

- **Total de Testes:** ${testResults.length}
- **Testes Bem-Sucedidos:** ${testResults.filter(r => r.status === 'PASS').length}
- **Testes Fails:** ${testResults.filter(r => r.status === 'FAIL').length}
`;

    fs.writeFileSync('test-report.md', content);
    console.log('Relatório gerado em test-report.md');
}

module.exports = generateReport; // Certifique-se de que esta linha está presente
