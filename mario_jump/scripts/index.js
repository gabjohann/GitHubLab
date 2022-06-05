const characterMario = document.querySelector('.character-mario');
const characterPipe = document.querySelector('.character-pipe');

const jump = () => {
  characterMario.classList.add('jump');

  setTimeout(() => {
    characterMario.classList.remove('jump')
  }, 500);
}

const loopGame = setInterval(() => {
  const pipePosition = characterPipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(characterMario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    characterPipe.style.animation = 'none';
    characterPipe.style.left = `${pipePosition}px`;
    
    characterMario.style.animation = 'none';
    characterMario.style.bottom = `${marioPosition}px`;

    characterMario.src = 'assets/images/game-over.png'
    characterMario.style.width = '4rem';
    characterMario.style.marginLeft = '3rem';

    clearInterval(loopGame);
  } 
}, 10);

document.addEventListener('keypress', jump);
