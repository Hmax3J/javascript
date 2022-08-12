let calculate = function(val1, val2, op='*') {
    let result

    switch(op) {
        case '-': result = val1 - val2; break
        case '*': result = val1 * val2; break
        case '/': result = val1 / val2
    }

    return result
}

console.log(calculate('3', '3', '-'))
console.log(calculate('5', '5', '*'))
console.log(calculate('10', '2', '/'))
console.log(calculate('10', '10'))