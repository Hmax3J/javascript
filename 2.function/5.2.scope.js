let a = 1 // global scope

{ // local scope 이라고 한다.
    console.log(a)
} // scope 내에 있으면 얼마든지 사용이 가능하다.

{
    let a = 2
    console.log(a) // local에 a가 있어서 local a 를 쓴다.
}
// 스크립트가 실행되면서 글로벌이 생기고, 일반블럭이 실행 될 때 생기고, 펑션블럭이 실행 될 때 생긴다.
console.log(a)