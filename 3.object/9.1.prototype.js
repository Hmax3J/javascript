let animal = { // object literal
    isAlive: true
} // [[prototype]] 숨김 속성이 있다.

function Rabbit(name) { // function 객체
    this.name = name
} // function은 기본적으로 prototype이 있다. prototype은 객체의 주소거나, null 이 2개의 값만 가진다.
// function의 prototype의 객체를 의미한다. 기본으로 constructor 라는 값을 가지고 있다.
console.log(Rabbit.prototype) // prototype은 숨겨져 있다. 그것에 대한 별명이다.

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)

//
Rabbit.prototype = animal // Rabbit의 생성자의 부모로 animal을 삼았다.
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__) // getter를 지칭한다.
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')