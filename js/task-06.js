const validationInputRef = document.querySelector('#validation-input');

validationInputRef.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
    if (event.currentTarget.value.length === Number(validationInputRef.dataset.length)) {
        validationInputRef.classList.add('valid');
        validationInputRef.classList.remove('invalid');
        return;
    }
    validationInputRef.classList.add('invalid');
    validationInputRef.classList.remove('valid');
    return;

}































