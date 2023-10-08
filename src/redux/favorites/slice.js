import { createSlice } from '@reduxjs/toolkit';

const getStorageFavorites = () => {
  const storageFovorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return storageFovorites;
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: getStorageFavorites(),
  },
  reducers: {
    addFavorites: (state, action) => {
      const newFavorite = action.payload;
      const updatedFavorites = [...state.favorites, newFavorite];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      state.favorites = updatedFavorites;
    },
    removeFavorites: (state, action) => {
      const removedId = action.payload;
      const filteredFavorites = state.favorites.filter(
        advert => advert.id !== removedId
      );
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      state.favorites = filteredFavorites;
    },
  },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

export default favoriteSlice.reducer;
