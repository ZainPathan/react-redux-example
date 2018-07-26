export default (state = [], action) => {
  switch(action.type) {
    //Check if action dispatched is CREATE_BOOK and act on it
    case 'CREATE_BOOK':
      //state.push(action.book);
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    default: 
      return state;
  }
};