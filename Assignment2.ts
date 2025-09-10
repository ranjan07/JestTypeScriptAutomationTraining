interface Book {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
}

function printBookInfo(book: Book): void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
    console.log(`Available: ${book.isAvailable ? "Yes" : "No"}`);
}

const book1: Book = {
    title: "Learning Typescript",
    author: "Author1",
    pages: 500,
    isAvailable: true
}

const book2: Book = {
    title: "Learning Jest",
    author: "Author2",
    pages: 400,
    isAvailable: false
}

printBookInfo(book1);
printBookInfo(book2);