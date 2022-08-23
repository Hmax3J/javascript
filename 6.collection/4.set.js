let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}
// set은 중복된 value가 없다. value만 쓸 수 있다. key값을 안쓴다.
set.add(user1).add(user2).add(user1)
console.log(set)

console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({}))

console.log(set.delete(user1))
console.log(set)

//
set.add(user1)

for(let user of set) console.log(user) // iterating 할 때 for of 를 쓴다.

set.forEach(val => console.log(val))

//
set = new Set([1, 2, 3])
console.log(set)

//
let arr = Array.from(set) // Array.from을 이용하면 set을 배열로 변환 시킬 수 있다. key는 자동부여 된다.
console.log(arr)

set = new Set('hello') // string도 배열이다.
console.log(set)