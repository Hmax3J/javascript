let json = '{"age": 30}'

try {
    let user = JSON.parse(json)

    // user && console.log(user.age)
    if(user.name) console.log(user.name)
    else throw new SyntaxError('user.name이 없습니다.')
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('ERROR: ' + e.message)
    else throw e
}