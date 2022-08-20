class Article {
    static publiser = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publiser)

Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

let article1 = new Article('java', 100)
let article2 = new Article('javaScript', 10)

console.log(Article.compare(article1, article2))

console.log(`${article1}`)
console.log(article1 + '')

console.log(article1.publiser, article1.address, article1.compare)