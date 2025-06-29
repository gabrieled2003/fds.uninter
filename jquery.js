document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao");
  const mensagem = document.getElementById("botaomensagem");

  botao.addEventListener("click", function () {
mensagem.innerHTML = "<b>Acredite em si mesmo e em seu potencial.<br>Você pode alcançar qualquer coisa que desejar!!!<br>Dr. Emmett Brown | De Volta para o Futuro (1985)</b>";
  });
});