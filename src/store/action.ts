import {createAction} from '@reduxjs/toolkit';
import { Offer,City } from '../types/offers';
export const cityChange = createAction<City>('cityChange');
export const listFilling = createAction('listFilling');
export const sortTypeSelect = createAction<string>('sortTypeSelect');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setSelectedPoint = createAction<{ title: string } | null>(
  'setSelectedPoint'
);
