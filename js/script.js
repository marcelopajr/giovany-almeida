if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleForm) {
  new SimpleForm({
    form: '.formphp', // seletor do formulário
    button: '#enviar', // seletor do botão
    erro:
      "<div id='form-erro'><h2>Sending error! </h2> <p>An error has occurred, try send email to gvncesar@gmail.com</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h2>Successfully submitted form! </h2><p>I will contact you soon.</p></div>", // mensagem de sucesso
  });
}
