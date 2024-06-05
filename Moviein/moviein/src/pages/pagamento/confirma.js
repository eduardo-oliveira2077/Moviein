function handlePrint() {
    window.print();
}

function handleNewPayment() {
    // Redirecionar para a página de novo pagamento ou executar outra ação 
    window.location.href = 'pagina_de_novo_pagamento.html'; // ajuste o URL conforme necessário
}
function goBack() {
    window.history.back();
}
// Função para atualizar a data atual
function atualizarData() {
    var dataAtual = new Date();
    var dataFormatada = dataAtual.toLocaleString();
    document.getElementById('data-container').textContent = "Data:" + dataFormatada;
}

// Chamar a função para atualizar a data assim que a página for carregada
window.onload = function() {
    atualizarData();
};