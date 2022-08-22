class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed // prototype이 아니라 this 객체에 존재한다.
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal) // Animal {name: 'animal'}

animal.run(10) // prototype에 있는 run을 쓴다.
console.log(animal) // speed라는 속성이 추가 된다. Animal {name: 'animal', speed: 10}

animal.stop()
console.log(animal) // Animal {name: 'animal', speed: 0}

//
class Rabbit extends Animal {
    /*
    constructor(...args) {
        super(...args)
    } 
    */ // 자동으로 구현되어 있다. 2,3 라인이 실행이 된다.
    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name) // Animal이 초기화 한다. 
        this.color = color // 현재 Rabbit이 초기화 한다.
    }

    stop() {
        super.stop() // Animal prototype 객체가 들어간다. super객체다. 부모에 있는 stop을 사용하겠다. super는 상속을 전제해야 사용 할 수 있다.
        this.hide()
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()