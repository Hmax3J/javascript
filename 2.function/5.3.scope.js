const greeting = 'hello'

say('abel')

function say(name) { // function declaration 어디에 사용하던 call해서 사용 할 때 문제가 없다.
    console.log(greeting, name)
} // function declaration 으로 선언된 변수는 바로 초기화 된다.

say('john')