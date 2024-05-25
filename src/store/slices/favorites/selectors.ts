import { NameSpace } from '../../../const';
import { Offer } from '../../../types/offers';
import { State } from '../../../types/state';

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.FavouritesData].favorites;

export const getFavouritesCount = (state: State): number =>
  state[NameSpace.FavouritesData].favorites.length;

export const getIsFavoritesLoading = (state: State): boolean =>
  state[NameSpace.FavouritesData].isFavouritesLoading;

export const getIsFavoriteStatusSubmitting = (state: State): boolean =>
  state[NameSpace.FavouritesData].isFavouriteStatusSubmitting;


