function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // 단위는 ms다. 첫번째 파라미터를 지정한 펑션을 큐에 넣고 지정한 시간만큼 늦추고 실행한다.

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox') // 파라미터를 줄 수 있다.

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId) // 큐에서 제거 시키는 역할을 한다.