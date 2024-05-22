import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer, FullOffer } from '../types/offers.js';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';
import {loadOffers, setError, setOffersDataLoadingStatus, setAuthorizationStatus, loadOfferData, addReview} from './action';
import { saveToken, dropToken } from '../service/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';
import { ReviewFormData } from '../types/review-form-data.js';
import { Review } from '../types/reviews.js';

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});
export const fetchOfferDataAction = createAsyncThunk<
  void,
  {
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOfferData', async ({ id }, { dispatch, extra: api }) => {
  const { data: offerInfo } = await api.get<FullOffer>(
    `${APIRoute.Offers}/${id}`
  );
  const { data: nearestOffers } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: reviews } = await api.get<Review[]>(
    `${APIRoute.Comments}/${id}`
  );
  dispatch(loadOfferData({ offerInfo, nearestOffers, reviews }));
});


export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
});

export const sendCommentAction = createAsyncThunk<
  void,
  {
    comment: ReviewFormData;
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('sendComment', async ({ comment, id }, { dispatch, extra: api }) => {
  const { data: review } = await api.post<Review>(
    `${APIRoute.Comments}/${id}`,
    {
      comment: comment.comment,
      rating: comment.rating,
    }
  );
  dispatch(addReview(review));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
});
