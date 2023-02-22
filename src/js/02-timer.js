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
  // defaultDate: new Date(),
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
  interval = setInterval(() => {
    delta = delta - 1000;
    console.log(delta);
    setTimer(refs, delta);
  }, 1000);
}
