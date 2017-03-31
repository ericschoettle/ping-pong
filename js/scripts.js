// Back enter
function pingPong(number) {
  var number = parseInt(number);
  if (!Number.isInteger(number)) {
    alert("sorry, you've got to enter an integer")
  } 
}

// Front end
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var input = $("input#number").val();
    var output = pingPong(input)
    $("#response").show()
    $("#response").append(output + "<br>");
  });
});
