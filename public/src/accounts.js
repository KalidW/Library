function findAccountById(accounts, id) {
  // access acounts id and filter
  // return accounts object conataining id
  let result;
  for(let keys in accounts){
    let account = accounts[keys]
    account.id.includes(id) ? result=account : result
  }
  return result
 }

function sortAccountsByLastName(accounts) {
  // access all accounts name last names
  // returns a sorted array of the provided account objects
  return accounts.sort((accountA,accountB) => accountA.name.last > accountB.name.last ? 1 : -1 ) 
}

function getTotalNumberOfBorrows(account, books) {
  // filter books array 
 // new array gets book.borrows objects if borrow id match account.id
 //return length of array of borrow objects that have matching id this is total 
 const numBorrows = books.filter(book => {
   return book.borrows.some(borrow => borrow.id === account.id)
 })
   return numBorrows.length
}


function getBooksPossessedByAccount(account, books, authors) {
// set empty array for checkout books
let checkedOutBooks = []
//loop thru books and borrows to find which books account.id = book.id and books returns = false
books.forEach(book => {
  if(book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false)){
    // push book into empty array
    checkedOutBooks.push(book)
  }})
// now if author.id = book.authorId then add author to checkedOutBooks array
checkedOutBooks.forEach(book => {
  let authorInfo = authors.find(author => author.id === book.authorId)
  book['author'] = authorInfo
})
// returns array of checkedOutBooks with author object inside book object from account

return checkedOutBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
