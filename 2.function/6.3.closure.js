function makeFn() { // 빨간 별 주소
    let name = 'parker' 

    function displayName() { // 파란 별 주소, displayName 이 closure다.
        console.log(name) // 외부에 있는 name을 참조한다.
    }

    return displayName
}

let myFn = makeFn() // 파란 별 주소
myFn() // 아우터는 파란별 이다. 