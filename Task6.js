const Book = require("./Book");

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
            console.log(book.displayBookDetails());
        }
    }

    findBooksByAuthor(author) {
        const normalizedAuthor = author.toLowerCase();
        return this.bookList.filter((book) => book.author.toLowerCase() === normalizedAuthor);
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
    const booksByJohnDoe = library.findBooksByAuthor("John Doe");
    for (const book of booksByJohnDoe) {
        console.log(book.displayBookDetails());
    }

    library.removeBookByTitle("OOP Guide");
    console.log("After removal:");
    library.displayAllBooks();
}

main();
