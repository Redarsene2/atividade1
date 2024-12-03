$(document).ready(function () {
  // Quando o botão "Alterar" é clicado
  $("#alterar-btn").click(function () {
    // Obtém o texto digitado no campo de entrada
    const novoTexto = $("#input-text").val();
    
    // Verifica se há algo digitado
    if (novoTexto.trim() !== "") {
      // Substitui o texto da div pelo texto digitado
      $("#output-div").text(novoTexto);
    } else {
      alert("Por favor, digite algo no campo de texto!");
    }
  });

  // Quando uma cor é selecionada na caixa de seleção
  $("#color-select").change(function () {
    // Obtém a cor selecionada
    const corSelecionada = $(this).val();
    
    // Altera a cor de fundo da div
    $("#output-div").css("background-color", corSelecionada);
  });
});