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
const testBtn = document.getElementById('=');
const clearBtn = document.getElementById('clear');

testBtn.addEventListener('click', () => {
    operate('*', 2, 4);
    console.log(operate('*', 2 , 4));
})

const firstValue = [];
const secondValue = [];

function display(clicked) {
    if (firstValue.length > 7) {
        alert('Can\'t enter more than 8 digits');
    }
    else {
        firstValue.push(clicked);
        document.getElementById('screen').innerHTML = firstValue.join('');
    }
    
}




