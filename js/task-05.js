const nameInputRef = document.querySelector('#name-input');

const nameOutputRef = document.querySelector('#name-output');
console.log(nameOutputRef);

nameInputRef.addEventListener('input', onNameInput);

function onNameInput(event) {
   nameOutputRef.textContent = event.currentTarget.value;
}