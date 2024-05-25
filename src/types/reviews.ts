import { Autor } from './offers';

export type Review = {
  id: string;
  user: Autor;
  date: string;
  rating: number;
  comment: string;
};
export type ReviewData = {
  comment: string;
  rating: number;
  offerId: string;
};
