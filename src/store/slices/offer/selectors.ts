import { FullOffer } from '../../../types/offers';
import { NameSpace } from '../../../const';

import { State } from '../../../types/state';

export const getOffer = (state: State): FullOffer | null =>
  state[NameSpace.SingleOfferData].offer;

export const getIsOfferLoading = (state: State): boolean =>
  state[NameSpace.SingleOfferData].isOfferLoading;

