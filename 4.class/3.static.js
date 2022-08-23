class Article {
    static publiser = 'ddanzi' // static을 쓰면 클래스안에 존재하게 된다. class field라 한다.

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) { // + 연산자를 사용하면 string인지 number인지 구분 할 수 없어 기본값이 default다.
        return hint == 'number' ? this.viewCnt : this.title // 그래서 여기에서도 this.title이 실행이 된다.
        // return (typeof hint) == 'string' ? this.title : this.viewCnt
    }
}

console.log(Article.publiser)

//
Article.address = 'seoul' // class에 추가 할 때 클래스.변수이름 = 을 사용한다. 할당연산자를 사용한다.
console.log(Article.address)

Article.getPrice = () => 2000 // static은 Article.~ 이런 식으로 클래스. 로 접근한다.
console.log(Article.getPrice()) 

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

// 과제: [symbol.toPrimitive]() 추가하라.
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare) // static 변수는 객체안에 있는 게 아니고 클래스 안에 있다.
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article)) // ['publiser', 'address', 'getPrice']
console.log(Article.prototype)
// {constructor: ƒ, toString: ƒ, valueOf: ƒ, Symbol(Symbol.toPrimitive): ƒ}
console.log(Object.keys(article1)) // ['title', 'viewCnt']

//
let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare) // 오름차순, 파라미터를 펑션을 주어야 한다.
console.log(articles)

Article.compare = (a, b) => b - a
articles.sort(Article.compare) // 내림차순, 큰 숫자가 먼저 나타난다.
console.log(articles)
