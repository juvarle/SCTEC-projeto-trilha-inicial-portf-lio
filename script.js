const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();

  if (nome === "") {
    resposta.innerText = "Por favor, preencha seu nome.";
    resposta.className = "erro";
    return;
  }

  resposta.innerText = `Mensagem enviada com sucesso, ${nome}!`;
  resposta.className = "sucesso";

  form.reset();
});