const Book = require("./Book");

function main() {
    const firstBook = new Book("Java Basics", "John Doe", 2020, 29.99);
    const secondBook = new Book("OOP Guide", "Jane Smith", 2022, 39.99);

    console.log(firstBook.displayBookDetails());
    console.log(secondBook.displayBookDetails());
}

main();
