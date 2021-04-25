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


































// 1. находим ссылку на input (const validationInputRef = document.querySelector('#validation-input');
// 2. вешаем слушателя на input (validationInputRef.addEventListener('blur', onValidationInputBlur);
//    тут событие 'blur', и колбэк-функция
// 3. делаем отдельные 2 функции: 1я функция добавляет класс 'valid' 
//    function onValidationInput() {
//    validationInputRef.classList.add('valid');}
//    2я функция делает toggle класса 'invalid'(toggle убирает класс если он есть и добавляет если его нет) 
//    function onInvalidationInput() {
//     validationInputRef.classList.toggle('invalid');}
// 4. функция callback с условием 
//     function onValidationInputBlur(event) {
//     if (event.currentTarget.value.length === 6) {
//         onValidationInput();
//     };
//     onInvalidationInput();
//     console.log(event.currentTarget.value.length);
// }
