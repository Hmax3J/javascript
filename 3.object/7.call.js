let user1 = {
    name: 'isable',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user1.greet()
user2.greet() // 자동으로 this에 user 객체가 들어간다.

//
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}.`)
}

greet() // 주어객체가 없으면 언디파인드

greet.call(user1) // call을 이용해 수동으로 this에 들어갈 객체를 선택한다.
greet.call(user2)

//
user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet()

// 과제: user1.greet 을 이용해서, I am colin. 을 출력하라.
user1.greet.call(user2)