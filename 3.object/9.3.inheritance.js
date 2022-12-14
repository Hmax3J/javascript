let animal = {
    name: 'animal'
}
// 위 아래 두 개는 같은 뜻 이다. 표현을 달리 했다.
animal = new Object()
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property 를 갖고 있다.
let rabbit = {
    age: 3   
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal // prototype을 animal로 바꾼다. A is a B 관계 여야 한다.
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age) // rabbit.name은 animal에 있는 name을 가져온다.

//
animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = { // rabbit is a animal, 상속을 한다. 
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name)

administrator.name = 'jonadan' // administrator에 name이 없어서 수정이 아니라 추가를 하게된다.
console.log(administrator.name)

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

//
console.log(Object.keys(rabbit)) // 내 개체의 속성을 보여준다. iterating 하는 첫 번째 방법이다.

// 과제: rabbit 의 key 들을 iterating 해서 출력하라.
for(let key in rabbit) // 해당 객체가 사용 할 수 있는 모든 것들을 보여준다. iterating 하는 두 번째 방법이다.
    console.log(key)

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(msg)
}