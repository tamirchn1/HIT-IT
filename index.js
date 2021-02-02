var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "f":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "h":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:aconsole.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}


///? TRIASL


const strings = document.querySelectorAll('.str');
let selection = document.querySelector('#modes');

strings.forEach((string) => {
  string.addEventListener('mouseenter', () => {
    checkMode(string);
  })
});

function checkMode(string) {
  if (selection.value == 'classic') {
    console.log(`${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/${string.id}.mp3`)
    sound.play();
  } else if (selection.value == 'electric') {
    console.log(`e${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/e${string.id}.mp3`)
    sound.play();
  } else if (selection.value == 'chorus') {
    console.log(`c${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/c${string.id}.mp3`)
    sound.play();
  }
}
