$(document).ready(function(){
  $("#valida").click(function(){
    $("#caja").slideToggle("slow");
  });
  $("#valida").click(function(){
    $("#button1").slideToggle("slow");
  });
	 $("#valida1").click(function(){
    $("#caja").slideToggle("slow");
  });
     $("#valida1").click(function(){
    $("#button1").slideToggle("slow");
  });
});
 $(function(){
    $('#imagenes div:gt(0)').hide();
    setInterval(function(){
      $('#imagenes div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#imagenes');}, 4000);
});
