class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }

    displayBookDetails() {
        console.log(`${this.title} by ${this.author} (${this.year}) - $${this.price.toFixed(2)}`);
    }
}

function main() {
    const firstBook = new Book("Java Basics", "John Doe", 2020, 29.99);
    const secondBook = new Book("OOP Guide", "Jane Smith", 2022, 39.99);

    firstBook.displayBookDetails();
    secondBook.displayBookDetails();
}

main();
