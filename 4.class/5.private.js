class CoffeMachine {
    #waterAmount // private은 #을 사용한다. 객체에 존재하는 속성이다.
    
    get waterAmount() {
        return this.#waterAmount + 100 // 확인하기 위해 일부러 +100을 했다.
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount // 확인하기 위해 일부러 곱했다.
    }
}

console.log(CoffeMachine)
console.log(CoffeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}, protected나 private을 쓰든 getter, setter는 prototype에 있다.

let machine = new CoffeMachine()
console.log(machine) // CoffeMachine {#waterAmount: undefined}

machine.waterAmount = 1 // setter, getter setter를 강제로 사용하게 된다.
console.log(machine.waterAmount) // 102, getter

// machine.#waterAmount = 1 // SyntaxError, 직접 접근하는게 안된다.