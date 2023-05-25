const decreaseButton = document.querySelector('[data-action="decrement"]');
const increaseButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decreaseButton.addEventListener('click', () => {
    counterValue--;
    valueEl.textContent = counterValue;
})

increaseButton.addEventListener('click', () => {
    counterValue++;
    valueEl.textContent = counterValue;
})

 
