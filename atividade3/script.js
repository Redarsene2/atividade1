$(document).ready(function () {
    // Parte 1: Marcar e desmarcar carros
    $(".carro").click(function () {
      $(this).toggleClass("selected");
    });

    // Parte 2: Filtrar produtos
    $("#category-select").change(function () {
      var selectedCategory = $(this).val();
      
      if (selectedCategory === "all") {
        $(".produto").show(); // Exibe todos os produtos
      } else {
        $(".produto").each(function () {
          var productCategory = $(this).attr("class").split(' ')[1];
          if (productCategory === selectedCategory) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      }
    });
  });