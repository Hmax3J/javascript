const age = 16 // 스크립트가 만들어지면 global 객체가 생긴다.
//sayAge() // TypeError: sayAge is not a  function
// tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge)
// console.log(hello) // ReferenceError: hello is not defined

{ // 블럭이 실행 될 때마다 local 객체가 생긴다.
    let age = 10

    function sayAge() { // 선언문이다. function declaration로 생긴 것은 바로 global에 undefined로 생긴다.
        console.log(age) // fn은 local에서 만들어졌다.
    } // local 객체가 생길 때 undefined가 fn로 할당된다.

    let tellAge = function() { // 실행문이다.
        console.log(age) // closure 라고 한다. js에서는 function들이 전부 closure다. 외부에 있는 변수를 참조 할 수 있는 펑션을 말한다.
    } // function expression

    sayAge()
    tellAge()
} // sayAge의 펑션 주소를 global에서 참조하고 있기 때문에 local은 없어지지 않는다.

sayAge() // sayAge는 global에 있기 때문에 사용 할 수 있다.
// tellage() global에 없기 때문에 에러가 난다.