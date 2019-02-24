$(document).ready(function(){
  $("#contact").submit(function(){
    event.preventDefault();
    var customer=$("#number").val();
    var choice=$("#date").val();
    var package=$("#category").val();
    $("#output").text("Your"+" "+package+"Photoshoot has been scheduled on"+" "+choice + " " + ".We'll contact you through " + " " + customer);
  });
  $("#lensflare").click(function(){
    $("#Edition2").slideUp();
    $("#Edition1").slideToggle();
  });
  $("#photoboom").click(function(){
    $("#Edition1").slideUp();
    $("#Edition2").slideToggle();
  });
});
