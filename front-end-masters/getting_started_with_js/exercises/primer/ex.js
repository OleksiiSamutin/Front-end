// TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function

function addFavoriteBook(bookName){
    if (!bookName.includes('Great')){
        favoriteBooks.push(bookName)
    }
}

function printFavoriteBooks(){
    console.log(`Favourite Books: ${favoriteBooks.length}`)
    for (let books of favoriteBooks){
        console.log(books)
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
printFavoriteBooks();
// TODO: print out favorite books
