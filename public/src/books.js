function findAuthorById(authors, id) {
  // find author.id that matches id
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
let allBooks = []
let checkedOutBooks = []
let returnedBooks = []
// loop thru books objects and books.borrows objects
// use find() if book is checked out push into checkedOutBooks else push into returnedBooks
//push checkedOutBooks into allBooks then returnedBooks
//return all books
books.forEach(book => {
book.borrows.find( borrow => borrow.returned === false? checkedOutBooks.push(book) : returnedBooks.push(book))
})
allBooks.push(checkedOutBooks)
allBooks.push(returnedBooks)
return allBooks
}

function getBorrowersForBook(book, accounts) {
  // set bookArray = []
  let bookArray = []
  // loop thru accounts using forEach() then use find() to loop thru book.borrows 
  accounts.forEach(account => {
    book.borrows.find(borrow => {
       // use if statement to find accountid that match book.borrow Ids then create returned key and push books into bookArray
      if(account.id === borrow.id){
        account['returned'] = borrow.returned
        bookArray.push(account)
      }
    })
  })
  // return bookArray but only show first 10 objects
  return bookArray.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
