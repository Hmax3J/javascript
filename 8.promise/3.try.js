new Promise((resolve, reject) => reject(new Error(1))) // reject인 경우 catch가 작동된다.
    .catch(e => console.log(e.message)) // 1

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(e.message)) // 2, executor에서 에러가 발생한 경우 catch가 작동된다.

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message)) // 3, then handler에서 에러가 발생한 경우도 잡아낸다.

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(e.message)) // blabla is not defined

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message)) // 4, catch를 제일 마지막에 사용하면 에러가 발생하고 끝난다. catch뒤에 다른 게 있으면 다른거도 실행한다. 제일 마지막에 써주는게 논리적으로 타당하다.
    .then(result => console.log(result)) // undefined
    
new Promise((reslove, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) {
        } else {
            console.log(e.message) // 5
            throw e
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 5