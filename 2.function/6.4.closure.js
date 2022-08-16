function makeCounter() { // fn값이 바로 할당된다. 빨간 별 주소다.
    let count = 0

    return function() {
        return ++count
    }
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i = 0; i < 2; i++) // 블럭기호를 생략했다. 블럭이 있는 상황이다. 빨간 별 주소다.
    console.log(counter1())

for(let i = 0; i < 2; i++) // counter1과 공유하지 않는다. 서로 다른 scope에 있다.
    console.log(counter2())