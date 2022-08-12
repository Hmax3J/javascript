function add(a, b) { // 함수의 이름이지만 변수로 사용된다.
    return a + b
}

console.log(add(1, 2, 3)) // 1, 2를 취하고 3은 무시한다.

//
add = function(...args) { // rest는 배열이다. ...가 rest를 의미한다. 파라미터의 개수에 제한이 없다.
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}
console.log(add(1), add(1, 2, 3))

//
function printName(firstName, lastName, ...titles) { // rest파라미터는 마지막에 위치해야 한다. 문법이다.
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

//
function showName() { // 파라미터와 arguments는 동의어다. 펑션을 쓰면 arguments라는 내장객체가 자동으로 생성되고 배열이다.
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr)) // 스프레드는 메서드를 콜 할때 사용한다. 모여있는 것을 각각 흐트려 놓는다.

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9] // 배열 만들 때도 스프레드를 사용 할 수 있다.
console.log(arr)