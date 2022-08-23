let map = new Map()

map.set('1', 'hello') // (key, value)
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) // key가 있는지 확인한다.
console.log(map.size) // entry 개수

console.log(map.delete(1), map.delete(2)) // delete가 성공하면 true, 실패하면 false
console.log(map)

map.clear() // map 초기화
console.log(map)

// key를 자동생성 하고 싶으면 array, 수동으로 하려면 map을 쓰면 된다.
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

//
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys() // key들을 얻어낸다.
console.log(keys)

for(let key of keys) 
    console.log(key)

let values = greens.values()
console.log(values)
for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

//
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries) // [ [ 'name', 'aiden' ], [ 'age', 50 ] ], key value
console.log(new Map(entries)) // Object(객체)를 Map으로 만든다.

//
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

let fruits = Object.fromEntries(map)
console.log(fruits) // map을 Object(객체)로 만든다.