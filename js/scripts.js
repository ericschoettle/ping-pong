$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    
    var input = $("input#number").val();
    console.log(input);
  });
});
