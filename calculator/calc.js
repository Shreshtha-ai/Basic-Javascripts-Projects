let currentOperation = '';
let currentInput = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').textContent = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();

    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';

    document.getElementById('display').textContent = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = '';
    currentOperation = '';

    document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('display').textContent = '0';
}
