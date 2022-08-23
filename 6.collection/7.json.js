// serializing
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user) // json 형태로 바꾼다. key는 string이고 value는 다양하다.
console.log(json)

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
} // json에서 메서드, symbol, undefined를 무시한다.

console.log(JSON.stringify(user))

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup))

room.toJSON = function() { return this.number }
let s = JSON.stringify(meetup) // 객체를 serializing 할 때 stringify를 쓴다.
console.log(s)

// parsing, json을 다시 객체로 만든다. JSON의 parse를 쓴다.
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "frined": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)

console.log(man)
console.log(typeof man)