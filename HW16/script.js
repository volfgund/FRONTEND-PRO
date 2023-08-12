const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const value = document.querySelector('#value');

let counterValue = 0;

const newValue = () => {
  value.textContent = counterValue;
}

document.querySelector('.btn-container').addEventListener('click', (event) => {
  if (event.target === decrease) {
    counterValue--;
  } else if (event.target === reset) {
    counterValue = 0;
  } else if (event.target === increase) {
    counterValue++;
  }

  newValue();
});