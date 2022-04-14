var main = {
  init: function () {
    this.main();
  },
  main: function () {
    $("#menuToggle").click(function () {
      if ($(".menu-principal").hasClass("expanded")) {
        $(".menu-principal.expanded").removeClass("expanded");
        $(this).removeClass("active");
        $("header").removeClass("active");
      } else {
        $(".menu-principal").addClass("expanded");
        $(this).addClass("active");
        $("header").addClass("active");
      }
    });
    $('#menuToggle').click(function(){
      $(this).toggleClass('open');
    });
  },
}
main.init();

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 80
    }, 500);
  });
});
