import { userData } from './slices/user';
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { multipleOffersData } from './slices/multiple-offers';
import { singleOfferData } from './slices/offer';
import { reviewsData } from './slices/reviews';
import { nearbyOffersData } from './slices/nearby-offers';
import { globalState } from './slices/global/global-data';
import { favouritesData } from './slices/favorites';

export const reducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.MultipleOffersData]: multipleOffersData.reducer,
  [NameSpace.SingleOfferData]: singleOfferData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.NearbyOffersData]: nearbyOffersData.reducer,
  [NameSpace.App]: globalState.reducer,
  [NameSpace.FavouritesData]: favouritesData.reducer
});
