for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var innerHtml = this.innerHTML;
    sound(innerHtml);
    buttonAnimation(innerHtml);
  });
}

document.addEventListener("keydown", function(event) {
  var keyName = event.key;
  sound(keyName);
  buttonAnimation(keyName);
});


function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
    ;

  }
}

function buttonAnimation(button) {
  if (button === "a"||button === "s"||button === "d"||button === "w" ||button === "j" ||button === "k" ||button === "l"   ) {
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
  else {}
}
