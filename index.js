console.log(document)

const calculator = {
  displayValue: '0'
};

function updateDisplay() {
    const display = document.querySelector('.display');
    display.value = calculator.displayValue;
}

var buttons = document.getElementById('buttons');

buttons.addEventListener('click', e => {
    const { target } = e;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operation')){
        console.log('operator', target.value)
        return;
    }
    if (target.classList.contains('number')){
        console.log('number', target.value)
        return;
    }
    if (target.classList.contains('clear')){
        console.log('removed', target.value)
        return;
    }
    input(target.value)
    updateDisplay();
    
})

function input(digit) {
    const { displayValue } = calculator;

    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}



