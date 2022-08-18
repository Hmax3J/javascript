let user = {// =가 있기 때문에 {}는 데이터 타입 object을 나타낸다. 
    name: 'frances', // key, value 로 나타낸다. entry라 한다.
    age: 70 // key의 타입은 symbol, string 중 하나고 value의 타입은 anytype이다.
}

user = { // 할당연산자 옆에 {} 이 있으면 object literal 이다. 
    name: {
        first: 'bob',
        last: 'smith'
    }, // entry는 , 로 구분한다.
    'nick name': 'tiger face', // 1개는 ''를 생략 할 수 있지만 스페이스 문자가 있는 단어는 ''를 써야한다.
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
} // 속성은 attribute, property로 나타 낼 수 있다. 값이 변하니 위의 문장들은 property다.

console.log(user.name)
console.log(user.name.first) // 객체 property를 접근 할 때 chainning을 쓴다.
//
user.sing()

// user.'nick name', error
// user.nick name, error
console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john' // 할당연산자를 사용해 데이터 쓰기를 했다.
user['age'] = 50
console.log(user.name.first, user.age)

let key = 'nick name'
console.log(user[key]) // []를 쓰면 []안에 key를 변수로 활용 할 수 있다. []를 사용 할 때 장점이다.
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

// man.1, error
console.log(man['1'])