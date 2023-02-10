const btnStrt = document.querySelector('[data-start]');
const btnStp = document.querySelector('[data-stop]');
const body = document.querySelector('body');
btnStp.setAttribute('disabled', '');
let interval;

btnStrt.addEventListener('click', startColorChange);
btnStp.addEventListener('click', stopColorChange);

function startColorChange() {
  interval = setInterval(bodyColor, 1000);
  btnStrt.setAttribute('disabled', '');
  btnStp.removeAttribute('disabled');
}
function stopColorChange() {
  clearInterval(interval);
  btnStrt.removeAttribute('disabled');
  btnStp.setAttribute('disabled', '');
}

function bodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
