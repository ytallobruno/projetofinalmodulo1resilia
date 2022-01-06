function terceiroNivelSheila() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Próximo de Presto\n2. Próximo da Tiferina'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoversheila3.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/sheilafinal.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}