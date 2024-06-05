document.getElementById('pagar').addEventListener('click', function() {
    window.location.href = '../pagamento/confirma.html';
  });
  function goBack() {
      window.history.back();
  }
  document.getElementById('cvv').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById('cvv').addEventListener('input', function (e) {
  if (this.value.length > 3) {
      this.value = this.value.slice(0, 3); 
  }
});
document.getElementById('cartao').addEventListener('input', function (e) {
  if (this.value.length > 19) {
      this.value = this.value.slice(0, 19); 
  }
});
document.getElementById('cartao').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9- --]/g, '');
});