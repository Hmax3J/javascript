let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b // arrow function, 간략하게 사용 할 수 있다. arrow 앞엔 파라미터, 뒤에는 블럭을 사용한다.
console.log(add(1, 2))

const double = n => 2 * n // return을 생략 할 수 있다.
console.log(double(2))

const greet = () => console.log('hello')
greet()

//
add = (a, b) => { // 2개 이상 일 때 return 값을 주어야 한다.
    const result = a + b
    return result
}

console.log(add(1, 2))