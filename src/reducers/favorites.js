import {createAction, createReducer} from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = [];

export const toggleFavoriteItem = createAction("favorite/toggle");
export const insertFavoriteItems = createAction("favorite/insertListOfFavorites");

export const favoritesSelector = state => state.favorites
export const favoriteSelector = id => favorites => favorites.includes(id)

export const isFavorite = (id) => createSelector(
  favoritesSelector,
  favoriteSelector(id)
)


export const favorites = createReducer(initialState, (builder) => {
  builder
    .addCase(insertFavoriteItems, (state, action) => (
      [...state, ...action.payload]
    ))
    .addCase(toggleFavoriteItem, (state, action) =>
      favoriteSelector(action.payload)(state) ?
        [...state.filter(id => id !== action.payload)] : [...state, action.payload]
    )
})