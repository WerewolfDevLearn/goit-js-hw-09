import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

console.log(form.elements[3]);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
