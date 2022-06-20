// Basic operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operate function

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*': 
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

// const testBtn = document.getElementById('=');
// testBtn.addEventListener('click', () => {
//     operate('*', 2, 4);
//     console.log(operate('*', 2 , 4));
// })


function clearDisplay() {
    document.getElementById('screen').innerHTML = '';
    currentValue.length = 0;
}

function clearAll() {
    document.getElementById('screen').innerHTML = '';
    currentValue.length = 0;
    firstValue = 0;
    secondValue = 0;
    operator = null;
}

let firstValue = 0;
let secondValue = 0;
let currentValue = [];
let operator = null;
let resultDone = false;


function display(clicked) {
    if (currentValue.length > 7) {
        alert('Can\'t enter more than 8 digits');
    }
    else if (clicked == '+' || clicked == '-' || clicked == '*' || clicked == '/') {
        if (firstValue != 0) {
            secondValue = currentValue.join('');
            firstValue = operate(operator, Number(firstValue), Number(secondValue));
            operator = clicked;
            clearDisplay();
        }
        else if (firstValue == 0) {
        operator = clicked;
        firstValue = currentValue.join('');
        clearDisplay();
        }
        console.log(`current first value ${firstValue}`);
        console.log(`current second value ${secondValue}`);
    }

    else if (clicked == '=') {
        if (resultDone == false) {
            resultDone = true;
            secondValue = currentValue.join('');
            clearDisplay();
            document.getElementById('screen').innerHTML = operate(operator, Number(firstValue), Number(secondValue));
            console.log(`result ${operate(operator, Number(firstValue), Number(secondValue))}`);
        }
        else {
            document.getElementById('screen').innerHTML = operate(operator, Number(firstValue), Number(secondValue));
        }

    }

    else if (clicked == '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
        currentValue.push(clicked);
        document.getElementById('screen').innerHTML = currentValue.join('');
    }
    
}







