let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) // 하루는 86,400초, ms로 계산해서 86400000 이다. number다.

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { // symbol을 쓸 때 [] 를 써야 key가 된다. 안쓰면 string이 된다.
        return hint == 'string' ? this.name : this.age
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`) // 객체가 기본타입으로 바뀐다. ``은 string이다.
console.log(user > user2)
console.log(user + 50) // +가 있으면 string인지, number인지 몰라 hint를 default로 준다.
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '') // + '' 는 string으로 바꾼다. toString을 호출해 string타입

user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)