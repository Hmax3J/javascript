let obj = {} // new object를 줄여서 쓴 것 뿐이다.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

//
obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__)

console.log(obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__) // 모든 생성자들의 prototype은 Object prototype을 상속한다.
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString()) // [1, 2] Array가 가지고 있는 toString이 사용되었다.

//
let one = new Number(1)
console.log(one.toString()) // Number (1) toString이 있다.

//
function User() {}
let user = new User()
console.log(user.toString()) // [object Object]
console.log(obj.toString()) // [object Object]