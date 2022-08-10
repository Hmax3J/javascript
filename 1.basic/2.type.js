// 변수는 데이터 타입이 없다. 숫자 문자 다양하게 담을 수 있다.
// 리터럴은 데이터 타입이 있다.
let foo = "I am a string."
foo = 'So am I' // 큰따옴표, 작은따옴표 뭘 실행해도 스트링 타입이다.
foo = `back tick` // 백 틱 도 스트링 타입이다. 숫자 1 왼쪽에 있는 단축기

foo = 1
foo = 1.0

console.log(1 / 0) // Infinity
console.log('a' / 1) // NaN(Not a Number) 숫자가 아니야 라는 뜻의 값이다. 에러메세지가 아니다.

foo = 1
console.log(isFinite(foo)) // isFinite는 숫자인지 아닌지 확인한다. 숫자면 true
foo = 'a'
console.log(isFinite(foo)) // 아니면 false

foo = '1'
console.log(parseInt(foo) + 1) // expression은 수식이 포함된 명령문을 말한다. 값을 나타내야 한다.

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '123456-789123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a)

foo = 1n

const okay = true
const fail = false

let val = null

let val2 // 값이 할당되지 않았다 또는 undefined가 정의 되었다. 라고 한다.
val2 = undefined // 에러메세지가 아니기 때문에 이렇게 할당이 가능하다.
console.log(val2) // undefined는 정의되지 않았다 라는 뜻이다. 에러메세지가 아니다.

let id = Symbol('id')
console.log(typeof id)

val = 1 // 문법상 데이터타입 이름은 넘버 다.
val = String(val) // 스트링 타입으로 바꾼다.
console.log(typeof val) // typeof 연산자가 리턴한 값은 string이다.

val = '6' / '2' // 숫자로 자동으로 캐스팅 된 후 나누기를 했다. 
console.log(val)

val = false / true // false는 0 으로, true는 1로 캐스팅 된다.
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false)) // 전부 0 으로 캐스팅 된다. 값이 없어서 0 이다.
console.log(Number('a'), Number(undefined), Number(NaN))

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // 값이 있어서 true다.
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) // 값이 없어서 false다.