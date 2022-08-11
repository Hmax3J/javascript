function greet() {
    console.log('hello')
}

greet()

let salute = function() { // 변수 옆에 = 할당 연산자가 있으면 쓰기다.
    console.log('hi')
}

salute() // 변수 오른쪽에 할당연산자가 없으면 읽기다. 펑션 호출 하려면 파라미터를 줘야 한다.
console.log(salute) // function salute 라는 펑션이 있다.

let sayHello = function(user, greeting) { // 변수명에 펑션이 담길거라 동사로 쓴다. 기본은 변수명은 명사 메서드는 동사를 쓴다.
    return `${greeting}, ${user}` // template literal
}

console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
say()

// 문단 구분
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

//
(function() { // 위의 명령문에 ;를 써서 구분해준 다음 사용이 가능하다.
    console.log('earth')
})()

//
let myFn = function(fn) { // 파라미터로 펑션을 받는다. result로 펑션을 받는다.
    const result = fn() // return 이 있어야 한다.
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

//
let showMsg = function(from, msg='no message') { // msg 는 default 값을 준다.
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')