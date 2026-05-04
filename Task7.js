const fs = require("fs");
const path = require("path");
const Book = require("./Book");

function main() {
    try {
        const bookCollection = [];
        bookCollection.push(new Book("Java Basics", "John Doe", 2020, 29.99));

        const lines = [];
        for (const book of bookCollection) {
            lines.push(`Title=${book.title}`);
            lines.push(`Author=${book.author}`);
            lines.push(`Year=${book.year}`);
            lines.push(`Price=${book.price.toFixed(2)}`);
        }

        const outputFile = path.join(__dirname, "books.txt");
        fs.writeFileSync(outputFile, `${lines.join("\n")}\n`, "utf8");

        const fileContents = fs.readFileSync(outputFile, "utf8");
        const outputLines = fileContents.split(/\r?\n/).filter((line) => line.length > 0);
        for (const currentLine of outputLines) {
            console.log(currentLine);
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`File operation failed: ${message}`);
    }
}

main();
