function primeiroNivelBobby() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Você saca seu tacape e parte para cima da Tiferina sem pensar duas vezes\n2. "Ah é? E porque eu deveria pagar algo pra esse barbudo e pra uma diabona que nem você?"'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverbobby1.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/bobbypt2.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
