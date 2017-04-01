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
var array = [1,2,3,4]
var string = 5
console.log(array.indexOf(string))
function removeAll(array, string) {
  var test = array.indexOf(string);
  while (test > -1) {
    var index = array.indexOf(string);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array
}

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
  while (toBeRemoved) {
    array = removeAll(array, toBeRemoved.shift());
  }
}

function removePingPong(array, string){
  if (Number.isInteger(string)) {
    console.log(array)
    var numbersArray = removeAll(string, array);
    console.log(numbersArray)
  } else if (string === "Ping") {
    var numbersArray = findAndRemoveMultiples(array, 3);
  } else if (string === "Pong") {
    var numbersArray = findAndRemoveMultiples(array, 3);
  } else if (string === "Ping-Pong") {
    var numbersArray = findAndRemoveMultiples(array, 15);
  }
}
console.log(removePingPong([1,2,3,4], 2))
// Front end
$(document).ready(function() {
  var numbersArray = []

  $("#add-button1, add-button2").click(function(event) {
    event.preventDefault();
    $("#response").empty();
    if ($("input#number1").val()) {
      var input = parseInt($("input#number1").val());
    } else {
      var input = parseInt($("input#number2").val());
    }


    if (!Number.isInteger(input)) {
      alert("sorry, you've got to enter an integer");
    } else {
      numbersArray.push(input);
      $("#response-jumbotron").show();
    }

    for (var i = 0; i < numbersArray.length; i++) {
      $("#response").append("<p>" + pingPong(numbersArray[i]) + "</p>");
    }

    $("input#number1").val('');
  });

  $("#remove-button1, remove-button2").click(function(event) {
    event.preventDefault();
    $("#response").empty();
    $("#add-div").hide();
    $("#remove-div").show();

    if (numbersArray) {
      if ($("input#number1").val()) {
        var input = parseInt($("input#number1").val());
      } else {
        var input = parseInt($("input#number2").val());
      }
      trimmedArray = removePingPong(numbersArray, input);

      if (trimmedArray.length === numbersArray.length) {
        alert("Try again! I don't see that below!")
      } else {
        numbersArray = trimmedArray
      }
      for (var i = 0; i < numbersArray.length; i++) {
        $("#response").append("<p>" + pingPong(numbersArray[i]) + "</p>");
      }
    } else {
      alert("You can't remove something from nothing!!")
    }
    $("input#number2").val('');

  });
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
