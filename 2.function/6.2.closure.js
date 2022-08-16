const age = 16
// sayAge() // ReferenceError: sayAge is not defined
// tellAge()

function init() {
    let age = 10

    function sayAge() { // 펑션 블럭이 실행되면 local에 생성된다.
        console.log(age) 
    } 

    let tellAge = function() { 
        console.log(age) 
    } 

    sayAge()
    tellAge()
}

init()
// sayAge()
// tellAge()