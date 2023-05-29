const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', consolelog)

function consolelog(event) {
    if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid');
    }
}
