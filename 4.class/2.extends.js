class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, ' stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)
animal.stop()
console.log(animal)

//
class Duck extends Animal {
    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run.')
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let duck = new Duck('duck') // Animal을 상속받았기 때문에 animal에 있는 constructor로 생성했다.
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()

//
class Rabbit extends Animal {
    stop() {
        super.stop() // 부모에 있는 stop을 사용하겠다. super는 상속을 전제해야 사용 할 수 있다.
        this.hide()
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
}

console.log(new Rabbit('rabbit', 'black'))