const initialState = {
  deletedAdvert: {
    data: {},
    error: null,
    loading: false
  },
  adverts: {
    data: [],
    error: null,
    loading: false
  }
};

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ADVERTS': {
      const payload = action && action.payload;
      console.log(action);
      return {
        ...state,
        adverts: {
          data: payload ? payload : state.adverts.data,
          loading: action.loading,
          error: action.error
        }
      };
    }
    case 'DELETE_ADVERT':
      const payload = action && action.payload;
      console.log (payload);
      state.adverts.data.filter((advert) => {
        return advert.id !== action.meta.id;
      });
      console.log(action);
      return {
        ...state,
        deletedAdvert: {
          data: payload ? payload : state.deletedAdvert.data,
          loading: action.loading,
          error: action.error
        }
      };
      return state.adverts.data.filter((advert) => {
        return advert.id !== action.payload;
      });
    case 'ADD_ADVERT':
      return state.concat(action.payload);
    case 'EDIT_ADVERT':
      return state;
    default:
      return state;
  }
}
