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
  },
  filter: {
    field: 'price',
    direction: 'asc'
  }
};

export function advertsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ADVERTS': {
      const payload = action && action.payload;
      const field = this.state.filter.field;
      const direction = this.state.filter.direction;
      return {
        ...state,
        adverts: {
          data: payload ? payload.sort(function (a,b) {
            return direction === 'asc' ? a.field - b.field : b.field - a.field;
          }) : state.adverts.data,
          loading: action.loading,
          error: action.error
        }
      };
    }
    case 'GET_ADVERT': {
      const payload = action && action.payload;
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
    case 'CHANGE_ORDER_ADVERTS':
      return {
        ...state,
        filter: {
          field: action.payload ? action.meta[0] : state.filter.field,
          direction: action.payload ? action.meta[1] : state.filter.direction
        }
      };
    default:
      return state;
  }
}
