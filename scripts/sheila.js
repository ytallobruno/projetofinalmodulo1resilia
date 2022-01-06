function primeiroNivelSheila() {
  while (question != 1 || question != 2) {
    var question = prompt(
      "1. Prestar atenção nos bandidos\n2. Correr para o canto da cabana e usar a capa da invisibilidade"
    );

    if (question == 1) {
      window.location.href = "../personagens/sheilapt2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameoversheila1.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
