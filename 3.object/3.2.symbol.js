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

function b(user) {
    console.log(Object.keys(user)) // symbol 조회가 안된다.
    console.log(user.name)
    console.log(user) // a와 같은 객체를 받았다.
}

src()