import { Review } from './reviews';
import { FullOffer, Offer } from './offers';

export type OfferData = {
  offerInfo: FullOffer;
  nearestOffers: Offer[];
  reviews: Review[];
};
