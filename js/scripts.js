$(document).ready(function(){
  $("#contact").submit(function(){
    event.preventDefault();
    var customer=$("#number").val();
    var choice=$("#date").val();
    var package=$("#category").val();
    $("#output").text("Your"+" "+package+"Photoshoot has been scheduled on"+" "+choice + " " + ".We'll contact you through " + " " + customer);
  });
});
