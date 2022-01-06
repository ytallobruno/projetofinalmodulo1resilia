function terceiroNivelBobby() {
  while (question != 1 || question != 2) {
    var question = prompt(
      'Qual pilastra irá bater?\n\n1. Pilastra da esquerda\n2. Pilastra da direita'
    );

    if (question == 1) {
      window.location.href = "./bobby-final.html";
      break;
    } else if (question == 2) {
      window.location.href = "./gameoverbobby3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}
