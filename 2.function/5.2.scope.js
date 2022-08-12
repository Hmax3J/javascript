let a = 1 // global scope

{ // local scope 이라고 한다.
    console.log(a)
} // scope 내에 있으면 얼마든지 사용이 가능하다.

{
    let a = 2
    console.log(a) // local에 a가 있어서 local a 를 쓴다.
}

console.log(a)