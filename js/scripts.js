let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playSound));

function playSound(e) {
  let button = event.target;
  let note = button.dataset.note;
  console.log(note);

  let audio = document.getElementById(`audio${note}`);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

// DATAKEY

document.addEventListener("keydown", event => {
  const key = event.key;
  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
    button.click();
  }
});
