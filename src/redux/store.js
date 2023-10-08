import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice';
import { favoriteReducer } from './favorites/slice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
