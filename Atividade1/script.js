$(document).ready(function () {
  // a) Selecionar todas as tags <span>
  const spans = $("span");
  console.log("Todos os spans encontrados:", spans.toArray().map(span => span.outerHTML));

  // b) Selecionar apenas as universidades cuja classe é "b"
  const universidadesClasseB = $("li.b");
  console.log("Universidades com classe 'b':", universidadesClasseB.toArray().map(li => $(li).text()));

  // c) Selecionar a lista de universidades do Paraná
  const listaParana = $("#lista_pr");
  console.log("Lista de universidades do Paraná:", listaParana.children("li").toArray().map(li => $(li).text()));
});
