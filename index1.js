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
