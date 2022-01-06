function primeiroNivelPresto() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Olha em volta e presta atenção na situação que se encontra\n2. "Não, não, tudo bem! Daremos o dinheiro"'
    );

    if (question == 1) {
      window.location.href = "../personagens/prestopt2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/gameoverpresto1.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}