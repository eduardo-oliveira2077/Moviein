function handlePrint() {
    window.print();
}

/*function handleNewPayment() {
    window.location.href = 'pagina_de_novo_pagamento.html';
}*/
function goBack() {
    window.history.back();
}
function atualizarData() {
    var dataAtual = new Date();
    var dataFormatada = dataAtual.toLocaleString();
    document.getElementById('data-container').textContent = "Data:" + dataFormatada;
}
window.onload = function() {
    atualizarData();
};
function gerarNumeroAleatorio(min, max) {
    var numeroAleatorio = Math.random();
    var numeroFinal = Math.floor(numeroAleatorio * (max - min + 1)) + min;
    return numeroFinal;
}
var paragrafoNumeroAleatorio = document.getElementById('numero-aleatorio');
var numero = gerarNumeroAleatorio(100000, 1000000);
paragrafoNumeroAleatorio.textContent += numero;
