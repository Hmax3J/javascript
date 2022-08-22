function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt)
        throw new Error('반복 횟수는 자연수이어야 합니다.')
    
    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '

    return phrase
}

let diff
let start = Date.now()

try {
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { // try,나 catch와 상관없이 꼭 실행하고 싶은 것을 쓴다.
    diff = Date.now() - start
}

console.log(`경과 시간: ${diff}ms`)