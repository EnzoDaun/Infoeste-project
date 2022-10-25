const botao = document.getElementById('enviar-mensagem')

botao.onclick = enviarMensagem

function enviarMensagem() {
  botao.blur();
  const num = "5518997180161";
  const url =`https://api.whatsapp.com/send?phone=${num}`
  window.open(url)
}