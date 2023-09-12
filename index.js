class Book {
    constructor(title, author, ISBN, availability = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availability = availability;
    }
}

class Library{
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(ISBN) {
        this.books = this.books.filter((book) => book.ISBN !== ISBN);
    }
    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach((book, index) => {
            if (book.availability) {
                console.log(
                    `${index + 1}. ${book.title} by ${book.author}`
                );
            }
        });
    }
}

class ReferenceBook extends Book{
    constructor(title, author, ISBN, category, availability = true) {
        super(title, author, ISBN, availability);
        this.category = category;
    }
}

//Create instances of the Library, Book, and ReferenceBook classes
const library = new Library();

//Add books to the library
const book1 = new Book("Wish You Well", "David Baldacci", "0446610100");
const book2 = new Book("London Bridges", "James Patterson", "0446613355");
const book3 = new ReferenceBook("Lost Symbol", "Dan Brown", "9781400079179", "Fiction");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

//Display available  books
library.displayAvailableBooks();
console.log("\nRemoving book...");

//Remove a book from the library
library.removeBook("0446613355");

//Display available books again 
library.displayAvailableBooks();
