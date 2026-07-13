//Make header big and red lol
$("h1").addClass("big-title");

//Add margins and enlarged buttons
$("button").addClass("margin-50 btn-big")

//Keypress event listener
$("body").keydown(function(event) {
  var keypress = event.key;
  $("h1").text(keypress);
})


//Button clicks

$("button").click(function() {
  $("button").css("background-color", "");

  let buttonText = $(this).text();
  let color = buttonText.toLowerCase();

  $(this).css("background-color", color);
  $("h1").css("color", color);

  console.log("You pressed: " + color);

});


//Title Click Reset

$("h1").click(function() {
  $("h1").css("color", "");
  $("button").css("background-color", "");
});