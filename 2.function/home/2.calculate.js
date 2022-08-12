/* 과제:
1.calculate.js 를 callback 으로 refactoring 하라.
-, *, / 연산을 callback 으로 처리한다.
*/

function minus(val1, val2) {
    return val1 - val2
}

function multiply(val1, val2) {
    return val1 * val2
}

function divide(val1, val2) {
    return val1 / val2
}

function calculate (val1, val2, op=multiply) {
   return op(val1, val2)
}

console.log(calculate(1, 2, minus),
            calculate(1, 2, multiply),
            calculate(1, 2, divide),
            calculate(1, 2))


/* arrow 사용
minus = (val1, val2) => val1 - val2

multiply = (val1, val2) => val1 * val2

divide = (val1, val2) => val1 / val2

calculate = (val1, val2, op=multiply) => op(val1, val2)

console.log(calculate(1, 2, minus),
            calculate(1, 2, multiply),
            calculate(1, 2, divide),
            calculate(1, 2))
*/