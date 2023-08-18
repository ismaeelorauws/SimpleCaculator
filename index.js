let first = 0;
let second = 0;
let selectedOperation = null;

function appendNumber(num) {
    if (selectedOperation === null) {
        first = first * 10 + num;
    } else {
        second = second * 10 + num;
    }
}
function appendSecondNumber(num) {
    second = second * 10 + num;
}


function selectOperation(operationFunc) {
    selectedOperation = operationFunc;
}

function calculate() {
    if (selectedOperation !== null) {
        let result = selectedOperation();
        document.getElementById("result").textContent = result;
        first = result;
        second = 0;
        selectedOperation = null;
    }
}

function equalplus() {
    return first + second;
}

function equalminus() {
    return first - second;
}

function equalmul() {
    return first * second;
}

function equaldiv() {
    if (second !== 0) {
        return first / second;
    } else {
        return "Error: Division by zero";
    }
}

function equalmod() {
    return first % second;
}

function equalpow() {
    return Math.pow(first, second);
}

function equaland() {
    return first & second;
}

function equalor() {
    return first | second;
}

function equalxor() {
    return first ^ second;
}
