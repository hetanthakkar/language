import {SET_LANGUAGE} from './constants';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
