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


const btn = document.getElementById('test');

btn.addEventListener('click', () => {
    document.getElementById('testResult').innerHTML = divide(10, 5);
} );