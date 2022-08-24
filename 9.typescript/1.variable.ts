let msg: string = 'hello'
// msg = 1 error 타입 불일치

let val: number = 1
let nuallableStr: string | null = null // 변수 하나의 타입을 n개 지정한다.
nuallableStr = 'hi'
// nuallableStr = undefined , typescript는 개발단계에서 error를 미리 걸러준다.

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

//
let a = 1 // 컴파일러가 자동으로 타입을 추측한다.
let b = 'b'
let c = true