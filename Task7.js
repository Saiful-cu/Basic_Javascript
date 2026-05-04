const fs = require("fs");

class Book {
    constructor(title, author, year, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }
}

function main() {
    const bookCollection = [];
    bookCollection.push(new Book("Java Basics", "John Doe", 2020, 29.99));

    const lines = [];
    for (const book of bookCollection) {
        lines.push(`Title=${book.title}`);
        lines.push(`Author=${book.author}`);
        lines.push(`Year=${book.year}`);
    }

    fs.writeFileSync("books.txt", `${lines.join("\n")}\n`, "utf8");

    const fileContents = fs.readFileSync("books.txt", "utf8");
    const outputLines = fileContents.split(/\r?\n/).filter((line) => line.length > 0);
    for (const currentLine of outputLines) {
        console.log(currentLine);
    }
}

main();
