function makeFn() { // 빨간 별 주소
    let name = 'parker' 

    function displayName() { // 파란 별 주소
        console.log(name)
    }

    return displayName
}

let myFn = makeFn() // 파란 별 주소
myFn() // 아우터는 파란별 이다. 