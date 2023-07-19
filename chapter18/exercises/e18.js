// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded) {
        this.title           = title;
        this.author          = author;
        this.copyrightDate   = copyrightDate;
        this.isbn            = isbn;
        this.numberOfPages   = numberOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded       = discarded;
    }
    checkout(checkIn = 1) {
        this.timesCheckedOut += checkIn;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded);
    }
    dispose(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded);
    }
    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let classicNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
let buildingShipsForDummies = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 2222222222222, 1147, 1, 'No');

// Code exercises 4 & 5 here:

buildingShipsForDummies.dispose(2023);
classicNovel.checkout(5);
classicNovel.dispose();

console.log(buildingShipsForDummies);
console.log(classicNovel);