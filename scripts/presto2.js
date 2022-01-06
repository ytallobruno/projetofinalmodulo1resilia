function segundoNivelPresto() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. "Olha minha senhora, nós podemos resolver isso com mais calma"\n2. Pegar seu chapéu mágico e preparar para luta'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverpresto2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/prestopt3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}