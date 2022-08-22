let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

//
let matrix = [ // matrix는 2차원 배열을 의미한다.
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b) // concat을 하면 두 배열의 원소를 다 가지고 있는 새로운 배열이 만들어 진다.
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3) // 할당연산자가 아니라 push로 원소를 넣을 수 있다. push 알고리즘은 stack 이다.

console.log(arr)
console.log(arr.pop()) // pop 을 이용해 제일 꼭대기에 있는 값을 얻어낸다. Last in First out
console.log(arr)

// 
arr = []
arr.push(1) // 큐는 줄서기로 수평적이다.
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) // shift를 이용해 제일 먼저 들어간 값을 얻어낸다.
console.log(arr) // First in First out

//
a = [0, 1, 2]
b = a.slice(1) // 1번 인덱스부터 마지막 인덱스까지의 값을 잘라내 새로운 배열을 만든다.
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4) // 1번인덱스, 2번인덱스 값 대신 들어갈 값을 넣는다. start, last, 대신 들어갈 값들
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b')) // 인덱스 번호를 알아본다.

arr.splice(arr.indexOf('b')) // b 이후로 값을 잘라내고 나타낸다. 계산을 앱에게 맡겼다.
console.log(arr) // splice는 값을 리턴하지 않는다. slice는 값을 리턴한다. 메서드는 리턴을 하냐 안하냐 2가지로 나뉜다.

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1) // 배열에서 특정 원소만 없앤다. 2번 째는 개수를 나타낸다. 1개를 지운다.
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() // sort는 기본 알고리즘이 a - b 오름차순 정렬이다.
console.log(arr, s)
// 과제: s 가 arr 인지, 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort()) // sort는 number가 아니라 string으로 취급해서 정렬한다.

console.log(arr.sort((a, b) => a - b)) // number로 취급하고 싶으면 이렇게 작성한다. 오름차순 정렬
console.log(arr.sort((a, b) => b - a)) // 내림차순 정렬

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key]) // in을 쓰면 key로 원소에 접근한다.

for(let val of arr) console.log(val) // of를 쓰면 value에 직접적으로 접근한다.
