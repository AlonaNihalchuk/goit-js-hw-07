const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = Number(document.querySelector('#value').textContent);


decrementBtnRef.addEventListener('click', decrement);


incrementBtnRef.addEventListener('click', increment);



function decrement(event) {
  valueRef.textContent = counterValue -= 1;
   
}
function increment(event) {
  valueRef.textContent = counterValue += 1;
 }
