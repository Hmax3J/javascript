let promise = new Promise((resolve, reject) => resolve('done'))

promise.then(console.log, console.log)
promise.then(console.log, null)

promise.then(console.log)
promise.catch(console.log)

promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log)

new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'), 2000))
    .then(console.log)
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.'))

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log)
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.'))