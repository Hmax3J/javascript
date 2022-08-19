function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name) // 객체 안에 name이라는 속성이 기본으로 있다. name값은 function 이름이다.
console.log(sayHi.length) // rest파라미터는 제외하고 개수를 확인한다.

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 100 // 개체 속성이 아니라 지역변수 였다.
    console.log('hi')
    sayHi.count++
}

sayHi()
console.log(`call count: ${sayHi.count}`)

sayHi.count = 0 // 이때서야 count가 생겼다.
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`)