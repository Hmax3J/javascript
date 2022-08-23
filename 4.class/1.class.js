class User { // sugar syntax 사용빈도가 떨어진다. 생성자가 더 선호된다.
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john')
console.log(user.name)
user.introduce()

// [[isClassConstructor]]: true
// User('john') // TypeError: Class constructor User cannot be invoked without 'new'

//
User = class { // User는 변수다.
    name // name, age를 지워도 결과는 같다. 
    age // class field라 부른다.

    constructor(name, age) { // constructor은 function user의 별명이라 생각하면 된다.
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() // abel / 12
console.log(user.name) // abel 
console.log(User.prototype.name) // undefined

//
function makeClass(phrase) {
    return class { // class는 값이라 리턴이 가능하다.
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi() // 파라미터가 없는 생성자는 생략해도 된다. 자동으로 생성된다.