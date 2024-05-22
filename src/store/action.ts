import {createAction} from '@reduxjs/toolkit';
import { Offer,City } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { OfferData } from '../types/offer-data';
import { Review } from '../types/reviews';
export const cityChange = createAction<City>('cityChange');
export const listFilling = createAction('listFilling');
export const sortTypeSelect = createAction<string>('sortTypeSelect');
export const setAuthorizationStatus = createAction<AuthorizationStatus>(
  'setAuthorizationStatus'
);
export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setSelectedPoint = createAction<{ id: string } | null>(
  'setSelectedPoint'
);
export const loadOfferData = createAction<OfferData>('loadOfferData');
export const addReview = createAction<Review>('addReview');
