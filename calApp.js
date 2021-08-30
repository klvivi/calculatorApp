const keys = document.querySelector('.calculator-keys');
const output = document.querySelector('#output');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const outputResult = output.textContent;
        const prevKey = key.dataset.prevKey;

        if (!action) {
            if (outputResult === '0') {
                output.textContent = keyContent;
            }
            else {
                output.textContent = outputResult + keyContent;
            }
        }
        else {
            if (action === 'add' || action === 'subtract' ||
                action === 'multiply' || action === 'divide') {
                output.textContent = outputResult + keyContent;
            }
            else if (action === 'del') {
                output.textContent = outputResult.slice(0, -1);
            }
            else if (action === 'reset') {
                output.textContent = '0';
            }
            else if (action === 'decimal') {
                output.textContent = outputResult + '.';
            }
            else {
                const display = outputResult;
                const firstValue = display.substring(0, indexOf(action));
                const operation = action;
                const secondValue = display.substring(indexOf(action), indexOf(display.length()));

                output.textContent = calculate(firstValue, operation, secondValue);
            }
        }
    }
})

const calculate = (firstValue, operation, secondValue) => {
    let result = '';
    if (operation === 'add') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
    }
    else if (operation === 'subtract') {
        result = parseFloat(firstValue) - parseFloat(secondValue);
    }
    else if (operation === 'multiply') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
    }
    else if (operation === 'divide') {
        result = parseFloat(firstValue) / parseFloat(secondValue);
    }
    return result;
}

