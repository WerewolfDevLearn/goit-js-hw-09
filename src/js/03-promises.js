import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const amount = form.elements.amount.valueAsNumber;
let delay = form.elements.delay.valueAsNumber;
const step = form.elements.step.valueAsNumber;

form.elements.submit.addEventListener('click', submitHandler);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const promisObj = { position: position, delay: delay };
      if (shouldResolve) {
        resolve(promisObj);
      } else {
        reject(promisObj);
      }
    }, delay);
  });
}

function submitHandler(event) {
  event.preventDefault();

  for (let position = 1; position <= amount; position++) {
    delay = delay + step;

    console.log('step: ', step);
    console.log('delay set: ', delay);

    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
  }
}
