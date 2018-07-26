export const createBook = (book) => {
  //return action
  return {
    //Unique identifier
    type: 'CREATE_BOOK',
    //Payload
    book
  }
};