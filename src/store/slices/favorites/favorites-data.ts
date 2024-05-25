import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Offer } from '../../../types/offers';
import { NameSpace } from '../../../const';
import {
  changeFavouriteStatusAction,
  fetchFavoritesAction,
} from './api-actions';

type FavouritesData = {
  favorites: Offer[];
  isFavouritesLoading: boolean;
  isFavouriteStatusSubmitting: boolean;
  hasError: boolean;
};

const updateFavourites = (favorites: Offer[], updatedOffer: Offer) => {
  const favoriteOfferIndex = favorites.findIndex(
    (el) => el.id === updatedOffer.id
  );

  if (updatedOffer.isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!updatedOffer.isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};

const initialState: FavouritesData = {
  favorites: [],
  isFavouritesLoading: false,
  isFavouriteStatusSubmitting: false,
  hasError: false,
};

export const favouritesData = createSlice({
  name: NameSpace.FavouritesData,
  initialState,
  reducers: {
    updateMultipleFavourites: (state, action: PayloadAction<Offer>) => {
      updateFavourites(state.favorites, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.hasError = false;
        state.isFavouritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavouritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.hasError = true;
        state.isFavouritesLoading = false;
      })
      .addCase(changeFavouriteStatusAction.pending, (state) => {
        state.isFavouriteStatusSubmitting = true;
      })
      .addCase(changeFavouriteStatusAction.fulfilled, (state) => {
        state.isFavouriteStatusSubmitting = false;
      })
      .addCase(changeFavouriteStatusAction.rejected, (state) => {
        state.isFavouriteStatusSubmitting = false;
      });
  },
});

export const { updateMultipleFavourites } = favouritesData.actions;
