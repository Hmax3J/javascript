let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four);

[one, , three] = [1, 2, 3, 4]
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
i = s.split(' ') // 문자를 토큰으로 쪼갠다. 파라미터는 구분자다.
console.log(i);

[a, b] = i // destructing을 했다.
console.log(a, b) 

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ') // destructing을 했다.
console.log(user)

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user) // [ [ 'name', 'oscar' ], [ 'age', 21 ] ]
console.log(entries)

for(let [key, value] of entries) console.log(key, value) // iterating, destructing을 했다.

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val)

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin); // pete jane

//
[one, two, ...rest] = [1, 2, 3, 4] // rest는 array다.
console.log(one, two, rest);

//
[name, surname='annonymous'] = ['john']
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width);

({title, height, width} = options) // 객체의 key와 변수의 이름이 통일되어 있어야 한다.

let {width: w, height: h} = options // 다르게 쓰고 싶을 때 이렇게 사용한다.
console.log(w, h)

let {title: t, ...other} = options // 여기서 other는 객체다.
console.log(t, other)

let {title: subject, wide=1000} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
}

// 과제 : bread 에서 size 와 items 를 뽑아내라.
let {size, items} = bread // destructing, 구조 분해 할당한다.
console.log(size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {
    console.log(name, item1, item2)
}

showMenu(menu)