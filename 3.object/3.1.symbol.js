let id = Symbol() // description을 주지 않아 undefined다.
let id1 = Symbol('id') // 유일한 값이다.
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2) // false, 서로 다르다.

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1 // string 타입
user[userId] = 2 // symbol 타입

console.log(user)

// 과제: user 객체의 value 들을 iterating 해서 출력하라.
for(let key in user) console.log(key)

console.log(Object.keys(user))

// global symbol registry
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2) // true, for은 새로 symbol을 만들지 않고 공유한다.

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

//
id1 = Symbol.for('name') // global symbol, key다.
id2 = Symbol('name') // local symbol, key가 아니다. description 이다.
console.log(id1 == id2) // 서로 다른 symbol이다.

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))