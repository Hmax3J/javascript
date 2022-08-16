let user = {}

user.height = 200 // 할당연산자가 있을 때 user에 height가 있으면 값을 바꾸고 없으면 생성한다.
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight // 삭제한다.
console.log(user.weight) // undefined

console.log('height' in user) // in은 boolean을 return한다. user 안에 height가 있는가 라는 뜻이다.
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.name = 'paker'
console.log(Object.keys(user)) // key를 배열로 가지고 있는 변수를 리턴한다.
console.log(Object.values(user)) // value를 배열로 가지고 있는 변수를 리턴한다.
console.log(Object.entries(user)) // key와 value를 가지고 있는 entry를 리턴한다. ['height', 200], ['name', 'paker'] 리턴한다.

//
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address // user안에 address가 있고 address안에 street이 있다.
address.street = 'sejong'
console.log(user.address.street) // chainning
// console.log(user.city.name), TypeError: Cannot read properties of undefined (reading 'name')
console.log(user.city?.name) // optional chainning, name까지 가지 않고 city? 에서 undefined를 return한다.

//
let street
// street = user.city.street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where' // optional chainning 의 기본값을 할당한다.
console.log(street)

// user?.address = 'sejong' optional chainning는 할당연산자 오른쪽, 값에 사용한다. 문법이다.

user = null
// user.greet(), error
console.log(user?.greet) // null에도 가능하다. undefined를 return 한다.
user = undefined
// user.greet(), error

//
user = {}
// user.greet(), error
console.log(user.greet?.())