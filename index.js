var drumElements = document.querySelectorAll(".drum");

for (var i = 0; i < drumElements.length; i++) {
  var currentElement = drumElements[i];

  currentElement.addEventListener("click", function() {
    var currentWord = this.innerHTML;
    slapKeyboard(currentWord);
    pressedKey(currentWord);
  });
}

// attaching keys events
document.addEventListener("keydown", function(event) {
  slapKeyboard(event.key);
  pressedKey(event.key);
});

// function for making sound
function slapKeyboard(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("songs/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("songs/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("songs/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("songs/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("songs/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("songs/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("songs/snare.mp3");
      snare.play();
      break;
    default:
      console.log(key);
      break;
  }
}

// function for changing the animation of the pressed key
function pressedKey(key) {
  var cElement = document.querySelector("." + key);
  cElement.classList.add("pressed");
  // console.log(cElement.classList);
  setTimeout(function() {
    cElement.classList.remove("pressed");
  }, 100);
}
