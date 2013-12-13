$(document).ready(function(){

  // body.js vyuzivame pro stylovani

  $('body').addClass('js');

  // Inicializace Fancyboxu

	$(".fancybox").fancybox();

  // Unveil pro lazyloading

  $("img").unveil(0);

})
