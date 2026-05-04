class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    displayBookDetails() {
        return `${this.title} by ${this.author} (${this.year}) - $${this.price.toFixed(2)}`;
    }
}

module.exports = Book;