/* 과제:
~ 을 class 로 refactoring 하라.
*/

class Food {
    constructor(taste, name) {
        this.taste = taste
        this.name = name
    }
    [Symbol.toPrimitive]() { 
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    } // arrow function 을 사용하면 return 생략이 가능하다.
}

class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
console.log(waiter.order('짬뽕', chef2) + '')