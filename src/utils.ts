import { Offer } from './types/offers';
import { SortingType } from './const';

export const capitalizeFirstLetter = (word: string) => {
  if (word.length === 0) {
    return word;
  }
  const trimmed = word.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

export const getSorting: Record<
  SortingType,
  (offers: Readonly<Offer[]>) => Offer[]
> = {
  [SortingType.Popular]: (offers) => [...offers],
  [SortingType.LowToHigh]: (offers) =>
    [...offers].sort((a, b) => a.price - b.price),
  [SortingType.HighToLow]: (offers) =>
    [...offers].sort((a, b) => b.price - a.price),
  [SortingType.TopRated]: (offers) =>
    [...offers].sort((a, b) => b.rating - a.rating),
};

