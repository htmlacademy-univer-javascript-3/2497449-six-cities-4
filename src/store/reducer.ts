import {createReducer} from '@reduxjs/toolkit';
import { Offer, FullOffer } from '../types/offers';
import { addReview, loadOfferData, cityChange, sortTypeSelect, loadOffers, setError, setOffersDataLoadingStatus, setSelectedPoint, setAuthorizationStatus} from './action';
import { AuthorizationStatus } from '../const';
import { City } from '../types/offers';
import { Review } from '../types/reviews';

type StateType = {
  curOffer: {
    offerInfo: FullOffer | null;
    nearestOffers: Offer[];
    reviews: Review[];
  };
  city: City;
  offers: Offer[];
  sortType: string;
  isOffersDataLoading:boolean;
  error: string|null;
  authorizationStatus: AuthorizationStatus;
  selectedPoint: {
    id: string;
  } | null;
};

const initialState: StateType = {
  curOffer: {
    offerInfo: null,
    nearestOffers: [],
    reviews: [],
  },
  city: {
    name: 'Paris',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  offers: [],
  sortType: 'Popular',
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  selectedPoint: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(loadOfferData, (state, { payload }) => {
      state.selectedPoint = { id: payload.offerInfo.id };
      state.curOffer = { ...payload };
    })
    .addCase(addReview, (state, { payload }) => {
      state.curOffer.reviews = [...state.curOffer.reviews, payload];
    })
    .addCase(sortTypeSelect, (state, {payload}) => {
      state.sortType = payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setSelectedPoint, (state, { payload }) => {
      state.selectedPoint = payload;
    });
});

export {reducer};
