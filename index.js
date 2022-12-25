let drumSet = document.querySelectorAll('.drum');

const handleClick = (e) => {
  let audio;
  switch (e.target.innerText) {
    case 'w':
      audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;

    case 'i':
      audio = new Audio(
        './sounds/00s-treble-heavy-high-hat-sample-a-key-01-JqH.mp3'
      );
      audio.play();
      break;

    case 'j':
      audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;

    case 'k':
      audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;

    case 'l':
      audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
  }
};

const handlePress = (e) => {
  if (e.key == 'w') {
    let audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
  }
  if (e.key == 'a') {
    let audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
  }
  if (e.key == 's') {
    let audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
  }
  if (e.key == 'd') {
    let audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
  }
  if (e.key == 'i') {
    let audio = new Audio(
      './sounds/00s-treble-heavy-high-hat-sample-a-key-01-JqH.mp3'
    );
    audio.play();
  }
  if (e.key == 'j') {
    let audio = new Audio('./sounds/crash.mp3');
    audio.play();
  }
  if (e.key == 'k') {
    let audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
  }
  if (e.key == 'l') {
    let audio = new Audio('./sounds/snare.mp3');
    audio.play();
  }
};

document.addEventListener('keydown', handlePress);

for (let i = 0; i < drumSet.length; i++) {
  drumSet[i].addEventListener('click', handleClick);
}
