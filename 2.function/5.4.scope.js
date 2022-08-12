// sayHi() 명령어 실행 시점에서 name이 없어서 에러가 난다.

let name = 'neo'
sayHi()

function sayHi() { // function sayHi를 선언했다. function declaration 선언문이다.
    console.log('Hi,', name)
} // function declaration을 더 많이 사용한다.

sayHi()
//
//sayHello() // sayHello가 선언되어 있지 않아 에러가 난다.

const sayHello = function() { // function을 값으로 표현한다. function expression 실행문이다.
    console.log('Hello,', name)
} // 값이기 때문에 코드가 한줄도 실행하지 않은 상태에서 unintialized가 초기값이다.

sayHello()