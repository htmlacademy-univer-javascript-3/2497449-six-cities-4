import { Autor } from './offers';

export type Review = {
  id: string;
  autor: Autor;
  date: string;
  rating: number;
  text: string;
};
