import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import setTimer from './utils/setTimer';
const currentDate = new Date();
const currentDateMls = Date.parse(currentDate);
let delta = 0;
let interval;

const refs = {
  sartBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
  timeInput: document.querySelector('input#datetime-picker'),
};

refs.sartBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  // minDate: currentDate, //  Не дає вибрати дату меншу за поточну.
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDateMls = Date.parse(selectedDates[0]);
    delta = selectedDateMls - currentDateMls;
    if (delta <= 0) {
      Notify.warning('Please choose a date in the future"');
      return;
    }
    refs.sartBtn.removeAttribute('disabled');
    setTimer(refs, delta);
  },
};

const fp = flatpickr('input#datetime-picker', options);

refs.sartBtn.addEventListener('click', startCD);

function startCD() {
  interval = setInterval(decreaseDelta, 1000);
  refs.timeInput.setAttribute('disabled', '');
  refs.sartBtn.removeEventListener('click', startCD);
  refs.sartBtn.addEventListener('click', stopCD);
  refs.sartBtn.textContent = 'Stop';
  // delta = selectedDateMls - currentDateMls;
}

function stopCD() {
  clearInterval(interval);
  refs.sartBtn.removeEventListener('click', stopCD);
  refs.sartBtn.addEventListener('click', startCD);
  refs.sartBtn.textContent = 'Start';
  refs.sartBtn.classList.toggle('visually-hidden');
  createBTN();
  console.log(delta);
}

function decreaseDelta() {
  if (delta >= 0) {
    delta = delta - 1000;
    setTimer(refs, delta);
    console.log(delta);
  }
  if (delta <= 0) {
    refs.sartBtn.textContent = 'Start';
    refs.sartBtn.setAttribute('disabled', '');
    refs.timeInput.removeAttribute('disabled', '');
    delta = 0;
    setTimer(refs, delta);
    clearInterval(interval);
    Notify.info('Sorry. Time ran out.');
    return;
  }
}

function createBTN() {
  const resetBTN = document.createElement('button');
  resetBTN.setAttribute('type', 'button');
  resetBTN.setAttribute('data-reset', '');
  resetBTN.textContent = 'Reset';
  resetBTN.addEventListener('click', resetTimer);
  const continueBTN = document.createElement('button');
  continueBTN.setAttribute('type', 'button');
  continueBTN.setAttribute('data-continue', '');
  continueBTN.textContent = 'Continue';
  continueBTN.addEventListener('click', continueTimer);
  refs.timeInput.insertAdjacentElement('afterend', resetBTN);
  refs.timeInput.insertAdjacentElement('afterend', continueBTN);
}

function resetTimer() {
  delta = 0;
  setTimer(refs, delta);
  refs.timeInput.removeAttribute('disabled', '');
  refs.sartBtn.classList.toggle('visually-hidden');
  refs.sartBtn.setAttribute('disabled', '');
  document.querySelector('[data-reset]').remove();
  document.querySelector('[data-continue]').remove();
}
function continueTimer() {
  const currentDate2 = new Date();
  const currentDateMls2 = Date.parse(currentDate2);
  delta = Date.parse(fp.selectedDates[0]) - currentDateMls2;
  console.log(delta);
  interval = setInterval(decreaseDelta, 1000);
  document.querySelector('[data-reset]').remove();
  document.querySelector('[data-continue]').remove();
  refs.sartBtn.classList.toggle('visually-hidden');
  refs.sartBtn.removeEventListener('click', startCD);
  refs.sartBtn.addEventListener('click', stopCD);
  refs.sartBtn.textContent = 'Stop';
}
