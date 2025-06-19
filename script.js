document.addEventListener("DOMContentLoaded", function () {
  const linkProjeto1 = document.querySelector('a[href*="ek-companion"]');
  if (linkProjeto1) {
    linkProjeto1.addEventListener("click", function (event) {
      alert("Abrindo link do site Exiled Kingdoms");
    });
  }

  const linkProjeto2 = document.querySelector('a[href*="Projeto-Integrador"]');
  if (linkProjeto2) {
    linkProjeto2.addEventListener("click", function (event) {
      alert("Abrindo link do projeto Dulce Salgados");
    });
  }

  const linkProjeto3 = document.querySelector('a[href*="siscofis.com.br"]');
  if (linkProjeto3) {
    linkProjeto3.addEventListener("click", function (event) {
      alert("Abrindo link do sistema SISCOFIS");
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Mensagem enviada com sucesso! (simulação)");
      form.reset();
    });
  }
});
