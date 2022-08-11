/* 과제:
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자)가 parameter 이다.
2. parameter value 들은 string type 이다.
3. 연산자는 -, *, / 로 한정한다.
4. client 가 연산자를 안 정하면, * 을 연산자로 쓴다.
5. 연산 결과값을 return 한다.
*/

let calculate = function(val1, val2, op='*') {
    let result
    
    switch(op) {
        case '-': result = `${val1} - ${val2} = ${val1 - val2}`; break
        case '*': result = `${val1} * ${val2} = ${val1 * val2}`; break
        case '/': result = `${val1} / ${val2} = ${val1 / val2}`
    }

    return result
}

console.log(calculate('3', '3', '-')) // calculate 값을 눈으로 확인하기 위해 console.log 를 사용한다.
console.log(calculate('5', '5', '*'))
console.log(calculate('10', '2', '/'))
console.log(calculate('10', '10'))