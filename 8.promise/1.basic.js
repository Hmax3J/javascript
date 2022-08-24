let promise = new Promise((resolve, reject) => resolve('done')) // (resolve, reject) 파라미터를 executor 이라 한다.
/*
promise.then(console.log, console.log) // 소비자 라고 나타낸다. 첫 번째는 풜필드가 되었을 때 나타나고 두 번째는 reject 했을 때 나타난다.
promise.then(console.log, null) // resolve만 관심있고 reject는 관심없을 때 null로 써주면 된다.

promise.then(console.log)
promise.catch(console.log) // reject가 되면 작동한다.
*/
//
promise = new Promise((resolve, reject) => { // executor는 객체가 생성되자마자 즉각 실행한다.
    setTimeout(() => resolve('done'), 1000) // 약속을 이행 했을 때 결과메세지를 나타내고 싶을 때 파라미터 안에 값을 준다.
})

promise.then(console.log, console.log) // handler

//
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result),
    error => console.log(error))
*/
//
new Promise((resolve, reject) => 
    setTimeout(() => resolve('완성'), 2000))
    .then(console.log) // 완성
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.

new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log)
    .catch(e => console.log(e.message)) // 미완성
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.