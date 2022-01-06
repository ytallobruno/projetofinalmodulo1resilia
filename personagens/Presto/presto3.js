function terceiroNivelPresto() {
  while (question != 1 || question != 2) {
    var question = prompt(
      'O que presto disse enquanto criava sua magia?\n\n1. "Ocus Pocus Ala Sarude me dê algo que com ele os derrube"\n2. "Alacazin Salacandria me de algo que nos tire dessa fria"'
    );

    if (question == 1) {
      window.location.href = "./presto-final.html";
      break;
    } else if (question == 2) {
      window.location.href = "./gameoverpresto3.html";
      break;
    } else {
      alert("Digite 1 ou 2");
    }
  }
}