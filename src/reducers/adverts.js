const initialState = [
    { id: 1, category: 'Sporting Goods', price: '$49.99', title: 'Football' },
    { id: 2, category: 'Sporting Goods', price: '$9.99', title: 'Baseball' },
    { id: 3, category: 'Sporting Goods', price: '$29.99', title: 'Basketball' },
    { id: 4, category: 'Electronics', price: '$99.99', title: 'iPod Touch' },
    { id: 5, category: 'Electronics', price: '$399.99', title: 'iPhone 5' },
    { id: 6, category: 'Electronics', price: '$199.99', title: 'Nexus 7' }
  ];

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ADVERT':
      return state.concat(action.payload);
    case 'EDIT_ADVERT':
      return state;
    case 'DELETE_ADVERT':
      return state.filter((advert) => {
        return advert.id !== action.payload.id;
      });
    default:
      return state;
  }
}
