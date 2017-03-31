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
    var input = $("input#number1").val();

    var output = pingPong(input)
    $("#response").show()
    $("input#number1").val('');
    if (output) {
      $("#response").append("<p>" + output + "</p>");
    }
  });
  $("#remove-button1, remove-button2").click(function(event) {
    event.preventDefault();
    debugger
    $("#add-div").hide()
    $("#remove-div").show()
    $("input#number2").val('');
    // if (output) {
      // $("#response").append("<p>" + output + "</p>");
    // }
  });
  $("#remove-button1").hover(function() {
    $(this).removeClass("btn-default")
    $(this).addClass("btn-primary")
    $(this).prev().removeClass("btn-primary")
    $(this).prev().addClass("btn-default")
    $("input#number1").attr("placeholder","Enter a piece of text seen below...")
    }, function() {
    $(this).removeClass("btn-primary")
    $(this).addClass("btn-default")
    $(this).prev().removeClass("btn-default")
    $(this).prev().addClass("btn-primary")
    $("input#number1").attr("placeholder","Enter a number...")
    }
  );
  $("#add-button2").hover(function() {
    $(this).removeClass("btn-default")
    $(this).addClass("btn-primary")
    $(this).next().removeClass("btn-primary")
    $(this).next().addClass("btn-default")
    $("input#number2").attr("placeholder","Enter a number")
    }, function() {
    $(this).removeClass("btn-primary")
    $(this).addClass("btn-default")
    $(this).next().removeClass("btn-default")
    $(this).next().addClass("btn-primary")
    $("input#number1").attr("placeholder","Enter a piece of text seen below...")
    }
  );
});
