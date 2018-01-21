
$.ready()
$("#submit-btn").click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()

  if (userInput === "San Francisco"||userInput === "SF"||userInput === "Bay Area") {
    $("body").css("background", "url(images/sf.jpg) no-repeat center center fixed")
  }
  // if the user enters San Francisco, SF or Bay Area into the text box, change the background image of the page's body to sf.jpg. Otherwise go to the next conditional
  else if (userInput === "New York"||userInput === "New York City"||userInput === "NYC") {
      $("body").css("background", "url(images/nyc.jpg) no-repeat center center fixed")
    }
  // if the user enters New York, New York City or NYC into the text box, change the background image of the page's body to nyc.jpg. Otherwise go to the next conditional
  else if (userInput === "Los Angeles"||userInput === "LA"||userInput === "LAX") {
      $("body").css("background", "url(images/la.jpg) no-repeat center center fixed")
    }
  // if the user enters Los Angeles, LA or LAX into the text box, change the background image of the page's body to la.jpg. Otherwise go to the next conditional
  else if (userInput === "Austin"||userInput === "ATX") {
      $("body").css("background", "url(images/austin.jpg) no-repeat center center fixed")
    }
  // if the user enters Austin or ATX into the text box, change the background image of the page's body to austin.jpg. Otherwise go to the next conditional
  else if (userInput === "Sydney" ||userInput ===  "SYD") {
      $("body").css("background", "url(images/sydney.jpg) no-repeat center center fixed")
    }
// if the user enters Sydneyor SYD into the text box, change the background image of the page's body to sydney.jpg. Otherwise go to the next conditional
  else window.alert ("Sorry, that city does not exist...try another")
// if the user enters anything other than the above cities, create a window alert asking them to try a different city.
})
