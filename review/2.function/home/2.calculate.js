function minus(val1, val2) {
    return val1 - val2
}

function multiply(val1, val2) {
    return val1 * val2
}

function divide(val1, val2) {
    return val1 / val2  
}

function calculate(val1, val2, op=multiply) {
    return op(val1, val2)
}

console.log(calculate(1, 2, minus),
            calculate(1, 2, multiply),
            calculate(1, 2, divide),
            calculate(1, 2))