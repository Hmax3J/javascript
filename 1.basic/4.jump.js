if(true){}
if(false){} else {}

if(undefined) {console.log('!')} // undefined는 false라 {}를 실행안한다. 객체를 if안에 넣어 객체가 있으면 실행 아니면 실행안한다.
if(null) {console.log('!')}
if(0) {console.log('!')} // if(a == 0) 이 아니라 if(a) 이런 식으로 쓴다. 자바스크립트 관점에서 봐야 한다.

if(-1) {console.log('!')} // boolean이라 -1이라는 값이 있기 때문에 실행이 된다. 

console.log(true ? 1 : 0) // true면 1, 아니면 0 출력한다.

let val

switch('boo') {
    case 'bar': val = 'bar'; break // 한 줄에 명령문이 2개 이상 일 경우 ; 를 사용해 구분한다.
    case 'baz': val = 'baz'
    default: val = 'all right.'
}

console.log(val)