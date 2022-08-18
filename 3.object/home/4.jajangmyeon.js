/* 과제:
~를 객체지향으로 refactoring 하라.
*/

function Food(taste, name) {
    this.taste = taste
    this.name = name
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
waiter.order('짬뽕', chef2)

/*
function Food(name) {
    this.name = name
}

function Chef1() {
    this.cook = foodName => new Food(`달콤한 ${foodName}.\n`)
}

function Chef2() {
    this.cook = foodName => new Food(`매운 ${foodName}.\n`)
}

function Waiter() {
    this.serve = food => console.log(food)
}

const chef1 = new Chef1()
const chef2 = new Chef2()
const waiter = new Waiter()

waiter.serve(chef1.cook('짜장면'))
waiter.serve(chef2.cook('짜장면'))
waiter.serve(chef2.cook('짬뽕'))
*/