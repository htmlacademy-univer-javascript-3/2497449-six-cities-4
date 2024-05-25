import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullOffer } from '../../../types/offers';
import { APIRoute, Routes, NameSpace } from '../../../const';

import { AsyncThunkConfig } from '../../../types/state';
import { redirectToRoute } from '../../action';

export const fetchOfferAction = createAsyncThunk<
  FullOffer | null,
  string,
  AsyncThunkConfig
>(
  `${NameSpace.SingleOfferData}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(Routes.NotFound));
      return null;
    }
  }
);
