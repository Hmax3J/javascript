let json = '{"age": 30}'

try {
    let user = JSON.parse(json)

    // 과제: user 객체가 있으면, user.age 를 출력하라.
    // user && console.log(user.age), if(user) console.log(user.age)
    if(user.name) console.log(user.name)
    else throw new SyntaxError('user.name이 없습니다.') // 에러를 만들어 주는게 throw다. 에러 객체가 필요하다.
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('ERROR: ' + e.message)
    else throw e // if에 에러객체가 없으면 node에 넘긴다.
}

// ERROR: user.name이 없습니다.