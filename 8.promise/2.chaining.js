new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
    .then(result => {
        console.log(result) // 1
        return result + 1 // handler가 리턴한 값은 promise의 result 값이 된다.
    }).then(result => {
        console.log(result) // 2
        return result + 1
    }).then(console.log)    // 3