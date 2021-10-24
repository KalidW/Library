function getTotalBooksCount(books) {
  // set counter to 0
  let counter = 0
  // forEach() book increment counter
  books.forEach(book => counter++)
  // return counter
  return counter
}

function getTotalAccountsCount(accounts) {
  let counter = 0
  accounts.forEach(account => counter++)
  return counter
}

function getBooksBorrowedCount(books) {
  let counter = 0
  books.forEach(book => {
    book.borrows.find(borrow => borrow.returned === false ? counter++ : null)
  })
  return counter
}
// helper function for getMostCommonGenres
function sortGenres(genreA, genreB) {
  return genreB.count - genreA.count;
}
function getMostCommonGenres(books) {
const genres = books.reduce((acc,book) => {
  // the genre key is book object
  const { genre } = book
  // if genre doees NOT exist then new obejct created and counter set to 1 ELSE the counter increments
  !acc[genre] ?  acc[genre] = { name: genre, count: 1 } :  acc[genre].count++

  return acc
},{})
// uses helper function to sort and shows first 5 only 
return Object.values(genres).sort(sortGenres).slice(0, 5);
}

function getMostPopularBooks(books) {
  // use map() to make new array with new book objects inside
let popularBooks = books.map(book =>{
return {name: book.title, count: book.borrows.length}
})
// use sort() to make list from greatest to least and only show first 5
popularBooks.sort((bookA,bookB)=> bookA.count < bookB.count ? 1 : -1)

return popularBooks.slice(0,5)
}


function getMostPopularAuthors(books, authors) {
  // create empty array
  const finalArray = []
// loop thru authors objects
  authors.forEach(author => {
    // filter books to match author id to new array
   const authorFilter = books.filter((book) => book.authorId === author.id)
    // creates count of total borrows per author
   const authorCount = authorFilter.reduce((totalBorrows, book) => totalBorrows + book.borrows.length, 0);
    // pushes object into the finalArray that was empty
   finalArray.push({name:author.name.first + " " + author.name.last, count: authorCount})
  })
  // sort finalArray by count
  const sortedFinalArray = finalArray.sort((authorA,authorB) => authorA.count < authorB.count ? 1 : -1)
  console.log(finalArray.slice(0,5))
  return finalArray.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
