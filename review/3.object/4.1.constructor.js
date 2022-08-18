let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris', 57))

function User(name) {
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    return this
}

let user1 = User('bob')
user1 = new User('bob')
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

let str = String(i)
console.log(typeof str)

str = new String(1)
console.log(typeof human, human.name)

function BigUser() {
    this.name = 'any'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

console.log(BigUseR().name, SmallUser()?.name)

const user = new Object()
console.log(user)
user.age = 12

const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)

person.name = 'mandarin'
console.log(user)