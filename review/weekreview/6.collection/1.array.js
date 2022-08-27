let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())
console.log(arr)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())
console.log(arr)

a = [0, 1, 2]
b = a.slice(1)
console.log(b, a)

arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4)
console.log(arr)

arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b'))
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a))

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

for(let key in arr) console.log(arr[key])
for(let val of arr) console.log(val)

function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2)

let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()

arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting)
console.log(typeof greeting)

console.log(arr.join('/'))
console.log(arr.join(''))

arr = [1, 2, 3]
str = arr.toString()
console.log(str, '/', typeof str)

str = JSON.stringify(arr)
console.log(str, '/', typeof str)