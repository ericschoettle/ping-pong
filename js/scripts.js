// Back enter
function pingPong(number) {
   if (number % 15 === 0) {
    return "Ping-Pong"
  } else if (number % 3 === 0) {
    return "Ping"
  } else if (number % 5 === 0) {
    return "Pong"
  } else {
    return number
  }
}

function remove(array, string) {
  var index = array.indexOf(string);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array
}

function removeAll(array, string) {
  while (array.indexOf(string) > -1) {
    var index = array.indexOf(string);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array
}

function removePingPong(string, array){
  if (isInteger(string)) {
    var numbersArray = remove(string, array)
}


// Front end
$(document).ready(function() {
  var numbersArray = []
  var pingPongArray = []
  $("#add-button1, add-button2").click(function(event) {
    event.preventDefault();
    $("#response").empty();

    var input = parseInt($("input#number1").val());

    if (!Number.isInteger(input)) {
      alert("sorry, you've got to enter an integer")
    } else {
      numbersArray.push(input);
      $("#response-jumbotron").show();
    }

    for (var i = 0; i < numbersArray.length; i++) {
      var pingPongValue = pingPong(numbersArray[i])
      pingPongArray.push(pingPongValue)
      $("#response").append("<p>" + pingPongValue + "</p>");
    }

    $("input#number1").val('');
  });

  $("#remove-button1, remove-button2").click(function(event) {
    event.preventDefault();
    $("#response").empty();
    $("#add-div").hide()
    $("#remove-div").show()

    if (numbersArray) {
      var input = parseInt($("input#number2").val());
      // call pingpong remove, test to see if it removed something
    } else {
      alert("You can't remove something from nothing!!")
    }
    $("input#number2").val('');

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
