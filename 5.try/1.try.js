let json = '{"name": "john", "age": 30}' // json은 key, string은 ""로 표현해줘야 한다.
let user = JSON.parse(json)
console.log(typeof json, typeof user)

//
json = '{age: 30}'
// JSON.parse(json), age를 json형태로 안했기 때문에 error다. 앱이 죽는다.

try { // 명령문으로 에러가 생길 때 앱이 죽지 않게 만든다.
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}