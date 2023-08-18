import 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = parseInt(form.delay.value);
    const step = parseInt(form.step.value);
    const amount = parseInt(form.amount.value);

    for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const promiseDelay = delay + step * i;

      createPromise(2, 1500)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      // createPromise(position, promiseDelay)
      //   .then(({ position, delay }) => {
      //     notiflix.Notify.success(
      //       `✅ Fulfilled promise ${position} in ${delay}ms`
      //     );
      //   })
      //   .catch(({ position, delay }) => {
      //     notiflix.Notify.failure(
      //       `❌ Rejected promise ${position} in ${delay}ms`
      //     );
      //   });
    }
  });
});
