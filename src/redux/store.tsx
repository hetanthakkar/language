import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './roorReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
