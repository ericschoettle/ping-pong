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
  } else {
    return number
  }
}

// Front end
$(document).ready(function() {
  $("#add-button1, add-button2").click(function(event) {
    event.preventDefault();
    var input = $("input#number").val();

    var output = pingPong(input)
    $("#response").show()
    $("input#number").val('');
    if (output) {
      $("#response").append("<p>" + output + "</p>");
    }
  });
  $("#remove-button1, remove-button2").click(function(event) {
    event.preventDefault();
    debugger
    $("#add-div").hide()
    $("#remove-div").show()
    $("input#number").val('');
    if (output) {
      $("#response").append("<p>" + output + "</p>");
    }
  });
  $("#remove-button1").hover(function() {
    $(this).removeClass("btn-default")
    $(this).addClass("btn-primary")
    $(this).prev().removeClass("btn-primary")
    $(this).prev().addClass("btn-default")
    }, function() {
    $(this).removeClass("btn-primary")
    $(this).addClass("btn-default")
    $(this).prev().removeClass("btn-default")
    $(this).prev().addClass("btn-primary")
    }
  );
});
