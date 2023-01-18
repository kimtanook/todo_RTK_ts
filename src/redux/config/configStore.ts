import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import todoReducer from '../modules/todo';

const persistConfig = {
  key: 'root',
  storage,
};

const postPersistedReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: {
    todoReducer: postPersistedReducer,
  },

  // devTools: process.env.NODE_ENV !== 'production', // devTools 사용할 때
  middleware: [thunk], // thunk 사용할 때
});

export default store;
