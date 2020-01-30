class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${this.favoriteBooks.length}`);
		for (let bookName of this.favoriteBooks) {
			console.log(String(bookName));
		}
	}
}
let myBookShelf = new Bookshelf()

// Testing Bookshelf methods
myBookShelf.addFavoriteBook("A Song of Ice and Fire");
myBookShelf.addFavoriteBook("The Great Gatsby");
myBookShelf.addFavoriteBook("Crime & Punishment");
myBookShelf.addFavoriteBook("Great Expectations");
myBookShelf.addFavoriteBook("You Don't Know JS");
myBookShelf.printFavoriteBooks();
function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}


function loadBooks(bookshelf) {
	fakeAjax(BOOK_API, function onBooks(bookNames){
		for (let bookName of bookNames){
			bookshelf.addFavoriteBook(bookName);
		}
		bookshelf.printFavoriteBooks();
	})
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
