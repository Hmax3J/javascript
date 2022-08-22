let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)