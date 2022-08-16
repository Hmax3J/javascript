/* 과제:
~를 객체지향으로 refactoring 하라.
*/

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