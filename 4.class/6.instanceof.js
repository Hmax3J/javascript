class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(a instanceof A, a instanceof B, a instanceof Object) // true false true, a는 A의 객체이고 B의 객체는 아니고 Object의 객체다.
console.log(b instanceof A, b instanceof B, b instanceof Object) // true true true

console.log(typeof a, typeof b) // object object
console.log(typeof A, typeof B) // function function, class는 생성자라서 function