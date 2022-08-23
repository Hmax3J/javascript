class CoffeMachine {
    waterAmount // 클래스의 속성이 아니라 객체의 속성이다.

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeMachine)
/*
class CoffeMachine {
    waterAmount // 클래스의 속성이 아니라 객체의 속성이다.

    constructor(voltage) {
        this.voltage = voltage
    }
}
*/
console.log(Object.keys(CoffeMachine)) // [], waterAmount는 CoffeMachine에 없다.
console.log(CoffeMachine.prototype) // {constructor: ƒ}, waterAmount는 prototype에 없다.

let machine = new CoffeMachine(220)
console.log(machine) // CoffeMachine {waterAmount: undefined, voltage: 220}

machine.waterAmount = 1
machine.voltage = 100
console.log(machine) // CoffeMachine {waterAmount: 1, voltage: 100}

//
CoffeMachine = class {
    _waterAmount // protected

    get waterAmount() { // getter를 만들어야 한다. 이름은 _를 생략한다.
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) { // setter를 만들어야 한다.
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}, waterAmount는 getter, setter를 의미한다. prototype에 있다.

machine = new CoffeMachine()
console.log(machine) // CoffeMachine {_waterAmount: undefined}, _waterAmount가 객체에 있다.

machine.waterAmount = 1
console.log(machine) // CoffeMachine {_waterAmount: 2}, setter를 이용한다.
console.log(machine.waterAmount) // 102, getter를 이용한다. waterAmount는 액세서 이름이다.

machine._waterAmount = 11 
console.log(machine._waterAmount) // 11, get,set을 사용하지 않고 직접 사용하겠다.