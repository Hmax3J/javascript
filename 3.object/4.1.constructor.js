let makeUser = function(name, age) {
    return {
        name: name, // key, value(파라미터)
        age: age
    } // 과거 버전
}

makeUser = function(name, age) {
    return {
        name, // key이고 value다.
        age
    } // 문법이 개선 되었다.
} // 팩토리

console.log(makeUser('doris', 57))

//
function User(name) { // 생성자 라는 펑션은 이름 첫글자를 대문자로 쓴다.
    // this = {} 자동으로 생성된다. 생략이 되어있다. 직접쓰면 error
    this.name = name // user 생성자로 만들어진 객체가 this변수에 들어간다.
    this.greet = () => console.log(`I am ${this.name}.`)
    return this // 생략이 되어있다. 직접 써도 된다.
}
// 객체 생성 할 때 2가지 방법이 있다. Object literal, constructor 이 있다.
// Object literal은 하드코딩이 되어있다. constructor은 값이 바뀔 수 있다.
let user1 = User('bob') // 무시한다. undefined, 평범한 펑션이다.
user1 = new User('bob') // new를 써야 생성자로 활동한다. User {name: 'bob', greet: ƒ}
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah') // 생성자를 쓰는 이유다. 값이 가변적이다.
user2.greet()

//
let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

// console.log(BigUser().name, SmallUser().name) //TypeError: Cannot read properties of undefined (reading 'name')
// 과제: new를 하지 않고, 앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name) // .을 찍은 순간 chainning 이다.

//
const user = new Object() // 라이브러리에 있는 Object로 생성자를 만들 수 있다.
console.log(user) // 깨끗한 객체를 만든다 {}
user.age = 12

//
const person = Object.create(user) // user의 주소를 복제한다. 독립된 개체다.
console.log(person) // 주소를 복제 했기 때문에 아무것도 없다.
console.log(person.age) // 아우터를 이용해 user에 있는 age를 나타낸다.
console.log(person == user) // 복제를 해 새로 만든 객체 이기 때문에 서로 다르다.

person.name = 'mandarin'
console.log(user)
