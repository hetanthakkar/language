import {combineReducers} from 'redux';
import languageReducer from './languageReducer';
import {reducer} from './reducer';

export default combineReducers({
  reducer,
  languageReducer,
});
