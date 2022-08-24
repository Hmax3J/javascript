async function f() { // 특별한 펑션이다. promise의 신 문법이다.
    return 1 // promise가 만들어져 실행된다. promise의 result 값이다. 
}
f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log) // 2

f = async function() {
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message)) // 3

//
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise // await가 있으면 promise가 끝날 때 까지 기다린다. 끝날 때 까지 할당연산자가 실행이 안된다. 일반 펑션에서는 실행이 안된다. async function에서만 사용이 가능하다.
    console.log(result) // await가 없으면 ReferenceError: result is not defined 에러가 난다.
}
f() // 4

//
class Waiter {
    async wait() {
        return await Promise.resolve('cooked bread.')
    }
}
new Waiter().wait().then(console.log) // cooked bread.
