function segundoNivelSheila() {
  while (question != 1 || question != 2) {
    var question = prompt(
      "1. Pegar um bastão que estava próximo e partir para cima da tiferina\n2. Se esquivar para trás e usar a capa da invisibilidade"
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoversheila2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/sheilapt3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
