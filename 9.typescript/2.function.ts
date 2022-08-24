function sum(a: number, b: number): number { // 선언부에 있는 : number는 리턴값의 타입이다.
    return a + b
}

console.log(sum(1, 2))

//
function add(a: number, b: number, isDouble?: boolean): number { // optional Param
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2)
result = add(1, 2, true)
console.log(result)

//
function greet(name: string, nullable?: boolean) { // 리턴값의 타입이 다양해 리턴값의 타입을 or로 다 표시하던가 안써야 한다.
    if(nullable) return null
    else return `Hello, ${name}.`
}

let greeting = greet('cain')
greeting = greet('cain', true)
console.log(greeting)