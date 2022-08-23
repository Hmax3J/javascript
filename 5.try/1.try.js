let json = '{"name": "john", "age": 30}' // json은 key, string은 ""로 표현해줘야 한다.
let user = JSON.parse(json)
console.log(typeof json, typeof user)

//
json = '{age: 30}'
// JSON.parse(json), age를 json형태로 안했기 때문에 error다. 앱이 죽는다.

try { // 런타임 에러가 생길 때 앱이 죽지 않게 만든다. 에러가 발생할 만한 명령문을 try 로 감싼다.
    JSON.parse(json)
} catch { 
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) { // try 객체에서 만들어진 에러가 e 에 들어간다.
    console.log(e.name, '\n', e.message, '\n', e.stack)
}