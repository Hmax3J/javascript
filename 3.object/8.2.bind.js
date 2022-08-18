let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user) // bind는 펑션객체를 그대로 리턴한다. 파라미터로 지정한 객체를 this변수에 넣는다. call은 주어펑션을 call하는 거고 bind는 return 하는 것 이다.
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: fn에 user.greet 을 할당하라. 
//       greet의 this 엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)