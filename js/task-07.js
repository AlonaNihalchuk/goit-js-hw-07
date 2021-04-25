const sizeControlInputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

sizeControlInputRef.addEventListener('input', onChangeFontSizeInput);

function onChangeFontSizeInput(event) {

    spanRef.style.fontSize = `${event.currentTarget.value}px`;
}

    
