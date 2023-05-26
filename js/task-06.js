const inputEl = document.getElementById('validation-input');
console.log(inputEl);

    inputEl.addEventListener('blur', consolelog)
       

function consolelog(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
        console.log(inputEl);
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid');
console.log(inputEl);
    }
}
