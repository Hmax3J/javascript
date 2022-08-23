let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() { // 숨김 속성이고 메서드다.
        this.current = this.from // 시작 값이 from으로 주어졌다.
        return this
    },

    next() {
        if(this.current <= this.to)
            return { // 2개의 속성을 가지고 있어야 한다.
                done: false, // done은 iterating이 끝났다. 라는 뜻이고 false라 아직 안끝났다.
                value: this.current++ // done이 false 일 경우 value 속성 값이 있어야 한다.
            }
        else 
            return {
                done: true // iterating 끝났다.
            }
    }
}

for(let num of range) // 객체의 symbol.iterator를 리턴하고 next를 반복 콜 한다. value 값을 반복해서 뽑아낸다는 뜻이다.
    console.log(num)

//
function* generator() { // 특별한 펑션은 *이 있어야 하고 generator는 어떤 값을 반복적으로 뽑아내는 기능이 있어야 한다.
    let val = 1
    while(val <= 3) yield val++ // yield는 반복하는 값을 리턴한다.
} // 발전한 문법. 

for(let num of generator())
    console.log(num)

let g = generator() // iterable된 객체를 리턴한다.
console.log(g, typeof g) // generator {[[GeneratorState]]: 'suspended'} object

//
function* gen() {
    yield* generator() // yield* 은 객체를 리턴한다.
    yield* ['a', 'b']
    yield 9 // 숫자나 문자 값을 리턴 할 땐 그냥 쓴다.
}

for(let val of gen())
    console.log(val)