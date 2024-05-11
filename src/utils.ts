import { Offer } from './types/offers';

export const getSorting = (
  offers: Offer[],
  sortType: string
): Offer[] | never => {
  const offersCopy = offers.slice();
  switch (sortType) {
    case 'Popular':
      return offers;
    case 'Price: low to high':
      return offersCopy.sort((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return offersCopy.sort((offerA, offerB) => offerB.price - offerA.price);
    case 'Top rated first':
      return offersCopy.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      throw new Error('Non-existent sort type');
  }
};
