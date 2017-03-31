// Back enter
function functionName() {

}

// Front end
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var input = $("input#number").val();

    $("#response").show()
    $("#response").append(input + "<br>");
  });
});
