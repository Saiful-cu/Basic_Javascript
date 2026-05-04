class LibraryManager {
    constructor() {
        this.bookList = [];
    }

    addBook(book) {
        this.bookList.push(book);
    }

    removeBookByTitle(title) {
        const normalizedTitle = title.toLowerCase();
        this.bookList = this.bookList.filter((book) => book.title.toLowerCase() !== normalizedTitle);
    }

    displayAllBooks() {
        for (const book of this.bookList) {
            book.displayBookDetails();
        }
    }

    findBooksByAuthor(author) {
        const normalizedAuthor = author.toLowerCase();
        for (const book of this.bookList) {
            if (book.author.toLowerCase() === normalizedAuthor) {
                book.displayBookDetails();
            }
        }
    }
}

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
    const library = new LibraryManager();
    library.addBook(new Book("Java Basics", "John Doe", 2020, 29.99));
    library.addBook(new Book("OOP Guide", "Jane Smith", 2022, 39.99));
    library.addBook(new Book("Node Intro", "John Doe", 2024, 24.5));

    console.log("All books:");
    library.displayAllBooks();

    console.log("Books by John Doe:");
    library.findBooksByAuthor("John Doe");

    library.removeBookByTitle("OOP Guide");
    console.log("After removal:");
    library.displayAllBooks();
}

main();
