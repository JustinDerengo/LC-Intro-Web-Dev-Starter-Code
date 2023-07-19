const input = require('readline-sync');

class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
}

let library = [];

function addBookToLibrary () {
        newTitle = input.question("Enter the book title: ");
        newAuthor = input.question("Enter the author's name: ");
        newYear = input.question("Enter the publication year: ");
        newBook = newTitle;

        newBook = new Book(newTitle, newAuthor, newYear);
        library.push(newBook);

        return console.log('Book added succesfully!');
    }

function displayBooks () {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

function serachBookByTitle(search) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title == search) {
            console.log(library[i]);
        }
        console.log("No such book found in library.")
        
    }
}

function removeBookByTitle(search) {
   for (let i = 0; i < library.length; i++) {
        if(library[i].title = search) {
            library.splice(library[i], 1);
        }
        console.log("No such book found in library.");
    }
}

console.log("Welcome to the Library Catalog!");

let choice = Number(input.question(`Menu:
1. Add a book
2. Display all books
3. Search for a book
4. Remove a book
5. Exit

Please enter your choice:`));

while (choice !==5) {
    if (choice < 1 || choice > 5){
        choice = Number(input.question("Ivalid choice, please chose an option 1 -5: ")) 
    } else if (choice === 1) {
            addBookToLibrary();
            choice = Number(input.question(`Menu:
            1. Add a book
            2. Display all books
            3. Search for a book
            4. Remove a book
            5. Exit
            
            Please enter your choice:`));
     } else if (choice === 2) {
            displayBooks();
            choice = Number(input.question(`Menu:
            1. Add a book
            2. Display all books
            3. Search for a book
            4. Remove a book
            5. Exit
            
            Please enter your choice:`));
    } else if (choice === 3) {
            let search = input.question("Enter the title of the book you want to search: ");
            serachBookByTitle(search);
            choice = Number(input.question(`Menu:
            1. Add a book
            2. Display all books
            3. Search for a book
            4. Remove a book
            5. Exit
            
            Please enter your choice:`));
    } else if (choice === 4) {
            let remove = input.question("Enter the title of the book you would like to remove: ");
            removeBookByTitle(remove);
            choice = Number(input.question(`Menu:
            1. Add a book
            2. Display all books
            3. Search for a book
            4. Remove a book
            5. Exit
            
            Please enter your choice:`));
    }
}

if (choice === 5) {
    console.log("Thank you for using the LIbrary Catalog. Goodbye!");
}