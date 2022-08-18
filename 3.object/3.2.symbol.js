let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) { // a를 공유 하고 있음에도 a의 age는 조회를 못한다. age는 있다.
    console.log(Object.keys(user)) // symbol 조회가 안된다.
    console.log(user.name)
    console.log(user) // a와 같은 객체를 받았다.
}

src()