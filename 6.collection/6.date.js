console.log(Date())
console.log(typeof Date()) // string

let date = new Date()
console.log(date)
console.log(typeof date) // object
console.log(date.toLocaleDateString()) // 2022. 8. 23.

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9시간 = 한국시간
console.log(date.toLocaleDateString()) // 2022. 8. 23.
console.log(date.toLocaleTimeString()) // 오후 4:27:30

console.log(
    date.getFullYear(), // 2022
    date.getMonth(),    // 7 (0 ~ 11), month가 0부터 시작한다. 8월이 7월로 나타난다.
    date.getDate(),     // 23
    date.getUTCHours(), // 7
    date.getHours(),    // 16
    date.getMinutes(),  // 27
    date.getSeconds(),  // 30
    date.getMilliseconds(), // 999
    date.getDay() // 2 (0 ~ 6, 일 ~ 토)
)

console.log(date.getTime()) // 1661239650999 ms, 타임스탬프 값을 리턴한다.
console.log(Date.now())     // 1661240973903 ms  

date = new Date(0) // 이 때 이후로 흘러간 시간을 타임스탬프가 나타낸다.
console.log(date)

date = new Date(1000 * 60 * 60 * 24) // 하루를 더한다.
console.log(date)

date = new Date(-1000 * 60 * 60 * 24) // 하루를 뺀다.
console.log(date)
