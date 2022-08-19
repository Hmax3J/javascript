/* 과제:
다음 상속 관계로 객체들을 디자인하세요.
<life>
name 문자값
eat() 메서드
excrete()

<animal> life 상속받는다
name
move()

<bird> animal 상속받는다    <mammal> animal 상속받는다
name                        name
move() override             move() override
--

bird eat.
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.
*/

let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },
    excrete() {
        console.log(this.name, 'excrete.')
    }
}

let animal = {
    name: 'animal',
    move() {},
    __proto__: life
}

let bird = {
    name: 'bird',
    move() {
        console.log(this.name, 'fly.')
    },
    __proto__: animal
}

let mammal = {
    name: 'mammal',
    move() {
        console.log(this.name, 'run.')
    },
    __proto__: animal
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()