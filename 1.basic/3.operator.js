let val = 1 + 2 * 3 / 2 // 산술 연산자
console.log(val, 5, 4**2, 4**(1/2)) // 4**2 는 4의 2제곱 이라는 뜻이다. 4**(1/2)는 루트 라는 뜻이다.

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2') // 3이 아니고 붙이기 연산이다. + 연산자를 쓸 때 피연산자가 하나라도 문자면 붙이기 연산이 된다.

// unary plus operator
console.log(1 + +'2') // 문자 앞에 +를 문자앞에 붙이면 숫자로 변한다.
// ||는 처음으로 true인 값을 리턴하고 끝내고 &&는 처음으로 false인 값을 리턴하고 끝낸다.
console.log(1 || 0, 0 || 1) // 마지막으로 읽은 값을 return하고 끝낸다. 
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1) // 마지막으로 읽은 값 2, 그리고 1을 return 한다.

// foo && do(foo) foo에 값이 있으면 do를 호출하겠다. foo에 값이 없으면 do를 실행안한다.
// bar = baz || createBar() baz에 값이 있으면 bar에 baz를 할당한다. baz에 값이 없으면 createBar()의 실행값을 bar에 할당한다.

console.log() // 파라미터 없으면 빈줄 하나 출력한다.
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false) // ''는 숫자값에선 0 이고 문자값에선 false다.
console.log(true > 1)

// equivalent
console.log(1 == '1', 1 != '1')

// identical
console.log(1 === '1', 1 !== '1') // ===는 타입을 구분한다. 숫자와 문자는 다르기 때문에 false다.

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') // 유니코드가 z가 a보다 더 크기 때문에 true다. 
// 문자길이 비교 하고 싶으면 그냥 비교연산자 쓰면 된다.

console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)