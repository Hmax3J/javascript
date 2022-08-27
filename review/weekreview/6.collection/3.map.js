let map = new Map()

map.set('1', 'hello')
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))
console.log(map.has('1'), map.has(1), map.has(true), map.has(false))
console.log(map.size)

console.log(map.delete(1), map.delete(2))
console.log(map)

map.clear()
console.log(map)

map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)

let keys = greens.keys()
console.log(keys)

for(let key of keys)
    console.log(key)

let values = greens.values()
console.log(values)
for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))

map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

let fruits = Object.fromEntries(map)
console.log(fruits)