function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeBgColor = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const backgroundColor = document.querySelector('body');

btnChangeBgColor.addEventListener('click', changeColor)

function changeColor() {
  spanEl.textContent = getRandomHexColor();
  backgroundColor.style.backgroundColor = getRandomHexColor();
}
