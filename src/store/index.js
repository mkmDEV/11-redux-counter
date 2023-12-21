import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.js';
import counterReducer from './counter.js';

const store = configureStore({
  reducer: { auth: authReducer, counter: counterReducer },
});
export default store;
