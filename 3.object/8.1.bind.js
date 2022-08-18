let user = {
    name: 'madonna',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user.greet()

//
setTimeout(user.greet, 100) // greet의 부모가 없다.

let fn = user.greet
setTimeout(fn, 200)

//
setTimeout(() => user.greet(), 300) // greet을 큐에 등록한게 아니라 이름없는 펑션을 등록했다.