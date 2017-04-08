// Back enter
// Returns "ping", "pong", and "ping-pong" depending on inputted number
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

// function remove(array, string) {
//   var index = array.indexOf(string);
//   if (index > -1) {
//     array.splice(index, 1);
//   }
//   return array;
// }

// removes all instances of a string from an array
function removeAll(array, string) {
  for (var i = array.length-1; i >= 0; i--) {
    var index = array.indexOf(string);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array;
}

// removes all multiples of a number from an array, with special tratment for 15
function findAndRemoveMultiples(array, multiple) {
  var toBeRemoved = []

  if (multiple === 15) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % multiple === 0) {
        toBeRemoved.push(array[i]);
      }
    }
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % multiple === 0 && array[i] % 15 !== 0) {
        toBeRemoved.push(array[i]);
      }
    }
  }
  for (var i = 0; i < toBeRemoved.length; i++) {
    var array = removeAll(array, toBeRemoved[i]);
  }
  return array
}

// removes integers from an array or all multiples of 3, 5, or 15 if integer, Ping, Pong, or Ping Pong are entered, respectively
function removePingPong(array, string){
  if (Number.isInteger(string)) {
    var strippedArray = removeAll(array, string);
  } else if (string === "Ping") {
    var strippedArray = findAndRemoveMultiples(array, 3);
  } else if (string === "Pong") {
    var strippedArray = findAndRemoveMultiples(array, 5);
  } else if (string === "Ping-Pong") {
    var strippedArray = findAndRemoveMultiples(array, 15);
  } else {}
  return strippedArray
}

// Front end
$(document).ready(function() {
  numbersArray = []

  // Performs functions when the string is added to
  $("#add-button1, #add-button2").click(function(event) {
    event.preventDefault();

    $("#response").empty();

    // gather inputs
    if ($("input#number1").val()) {
      var input = parseInt($("input#number1").val());
    } else if ($("input#number2").val()) {
      var input = parseInt($("input#number2").val());
    }

    // Tests if input is integer - if so, stores in numbers array and unhides response section
    if (!Number.isInteger(input)) {
      alert("sorry, you've got to enter an integer");
    } else {
      for (var i = 1; i <= input; i++) {
        numbersArray.push(i)
      }
      $("#response-jumbotron").show();
    }

    // Runs pingPong on numbers array, showing results to user
    for (var i = 0; i < numbersArray.length; i++) {
      $("#response").append("<p>" + pingPong(numbersArray[i]) + "</p>");
    }

    // Clears input fields
    $("input#number1").val('');
    $("input#number2").val('');
  });

  // Performs functions when numbers are removed from string
  $("#remove-button1, #remove-button2").click(function(event) {
    event.preventDefault();
    // Prepares screen
    $("#response").empty();
    $("#add-div").hide();
    $("#remove-div").show();

    if (numbersArray) { // tests if there is an array from which to remove numbers

      // Gathers inputted values
      if ($("input#number1").val()) {
        var input = $("input#number1").val();
      } else if ($("input#number2").val()) {
        var input = $("input#number2").val();
      } else {}

      // Converts inputted string to integer, but leaves exception for Ping Pong, etc.
      if (parseInt(input)) {
        var input = parseInt(input);
      } else {}

      // Removes values, and tests to see if values were successsfully removed
      var lengthBeforeRemovePingPong = numbersArray.length;
      numbersArray = removePingPong(numbersArray, input);
      if (lengthBeforeRemovePingPong === numbersArray.length) {
        alert("Try again! I don't see that below!")
      }

      // Converts numbers array to Ping Pong and displays
      for (var i = 0; i < numbersArray.length; i++) {
        $("#response").append("<p>" + pingPong(numbersArray[i]) + "</p>");
      }

    } else { // Closes "if (numbersArray)..."
      alert("You can't remove something from nothing!!")
    }

    // Clears nubers from inputs
    $("input#number1").val('');
    $("input#number2").val('');
  });

  // Changes button hovered over to blue and other button to white, and back when hover ends. Handles case where remove is the default.
  $("#remove-button1").hover(function() {
    $(this).removeClass("btn-default");
    $(this).addClass("btn-primary");
    $(this).prev().removeClass("btn-primary");
    $(this).prev().addClass("btn-default");
    $("input#number1").attr("placeholder","Enter a piece of text seen below...");
    }, function() {
    $(this).removeClass("btn-primary");
    $(this).addClass("btn-default");
    $(this).prev().removeClass("btn-default");
    $(this).prev().addClass("btn-primary");
    $("input#number1").attr("placeholder","Enter a number...");
    }
  );

  // Changes button hovered over to blue and other button to white, and back when hover ends. Handles case where remove is the default.
  $("#add-button2").hover(function() {
    $(this).removeClass("btn-default");
    $(this).addClass("btn-primary");
    $(this).next().removeClass("btn-primary");
    $(this).next().addClass("btn-default");
    $("input#number2").attr("placeholder","Enter a number");
    }, function() {
    $(this).removeClass("btn-primary");
    $(this).addClass("btn-default");
    $(this).next().removeClass("btn-default");
    $(this).next().addClass("btn-primary");
    $("input#number1").attr("placeholder","Enter a piece of text seen below...");
    }
  );
});
