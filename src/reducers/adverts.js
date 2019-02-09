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
  },
  advert: {
    data: {},
    error: null,
    loading: false
  }
};

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ADVERTS': {
      const payload = action && action.payload;
      console.log('hgfhf', payload ? payload : state.advert.data);
      return {
        ...state,
        adverts: {
          data: payload ? payload : state.adverts.data,
          loading: action.loading,
          error: action.error
        }
      };
    }
    case 'GET_ADVERT': {
      const payload = action && action.payload;
      console.log(111111111111, action);
      return {
        ...state,
        advert: {
          data: payload ? payload : state.advert.data,
          loading: action.loading,
          error: action.error
        }
      };
    }
    case 'DELETE_ADVERT':
      const payload = action && action.payload;
      const error = action && action.error;

      let newData;
      if (payload && !error) {
        newData = state.adverts.data.filter((advert) => {
          return advert.id !== action.meta[0];
        });
      } else {
        newData = state.adverts.data;
      }

      return {
        ...state,
        deletedAdvert: {
          data: payload ? payload : state.deletedAdvert.data,
          loading: action.loading,
          error: action.error
        },
        adverts: {
          data: newData,
        }
      };
    case 'ADD_ADVERT':
      return {
        ...state,
        adverts: {
          data: action.payload ? state.adverts.data.concat(action.payload) : state.adverts.data
        }
      };
    case 'EDIT_ADVERT':
      let newAdverts = state.adverts.data.map((advert) => {
        if (advert.id === action.meta[0]) {
          return Object.assign({},advert, action.meta[1])
        }
        return advert;
      });

      return {
        ...state,
        advert: {
          data: action.payload ? action.payload : state.advert.data
        },
        adverts: {
          data: newAdverts,
        }
      };

    default:
      return state;
  }
}
