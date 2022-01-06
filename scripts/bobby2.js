function segundoNivelBobby() {
  while (question != 1 || question != 2) {
    var question = prompt(
      '1. Bobby cruza os braços e diz "A gente nem recebeu dinheiro suficiente da vila pra comprar tudo e pagar pedágio"\n2. Saca o tacape mágico e diz "Veremos quem vai assumir as consequências"'
    );

    if (question == 1) {
      window.location.href = "../personagens/gameoverbobby2.html";
      break;
    } else if (question == 2) {
      window.location.href = "../personagens/bobbypt3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
