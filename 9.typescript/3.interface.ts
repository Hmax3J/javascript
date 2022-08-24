interface Profile {
    id: number
    username: string
    nickname: string
}

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = {
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)

//
interface Relationship { // interface 만들면서 이미 존재하는 interface의 타입들을 전부 쓸 수 있다.
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        id: 1,
        username: 'cain',
        nickname: 'hero'
    },
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//
interface Account extends Profile {
    email: string
    password: string
}

// 과제: {} 안을 채워라.
const account: Account = {
    id: 1,
    username: 'cain',
    nickname: 'hero',
    email: 'cain@cain.com',
    password: 'cainpw'
}

//
interface User {
    id: number
    username: string
    photoUri?: string
}

let user: User = {
    id: 1,
    username: 'abel'
} // { id: 1, username: 'abel' }

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
} // { id: 1, username: 'abel', photoUri: 'face.jpg' }

console.log(user)

//
interface Shape {
    getArea(): number
    getPerimeter(): number
}

class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2) // pow는 r의 제곱을 표현한다.
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4)
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())