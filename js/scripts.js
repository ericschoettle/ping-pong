// Back enter
function pingPong(number) {
  var number = parseInt(number);
  if (!Number.isInteger(number)) {
    alert("sorry, you've got to enter an integer")
  } else if (number % 15 === 0) {
    return "Ping-Pong"
  } else if (number % 3 === 0) {
    return "Ping"
  } else if (number % 5 === 0) {
    return "Pong"
  } else return 
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
