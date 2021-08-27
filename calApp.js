const number = document.querySelectorAll('[data-num]');
const cal = document.querySelectorAll('[data-cal]');
const del = document.querySelector('[data-del]');
const reset = document.querySelector('[data-reset]');
const output = document.querySelector('#output');

number.forEach(button => {
    button.addEventListener('click', function() {
        if (output.textContent.length === 0) {
            output.textContent = button.textContent;
        }
        else {
            output.textContent = output.textContent + button.textContent;
        }
    })
})



