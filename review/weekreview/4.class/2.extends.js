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

class Duck extends Animal {
    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, 'run.')
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

let duck = new Duck('duck')
console.log(duck)

duck.run(10)
duck.stop()
duck.hide()

class Rabbit extends Animal {
    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
}

console.log(new Rabbit('rabbit', 'black'))