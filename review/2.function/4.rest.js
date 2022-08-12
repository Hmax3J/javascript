function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3))

add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}
console.log(add(1), add(1, 2, 3))

function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))