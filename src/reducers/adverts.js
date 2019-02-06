const initialState = [];

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ADVERTS':
      if (action.payload) {
        return action.payload;
      }
      return [];
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
