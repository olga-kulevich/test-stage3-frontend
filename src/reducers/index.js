import { combineReducers } from 'redux';
import { advertsReducer } from './adverts';

const reducers = combineReducers({
  Adverts: advertsReducer,
});

export default reducers;
