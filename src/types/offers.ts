export type Offer = {
  id: string;
  img: string;
  isPremium: boolean;
  price: string;
  title: string;
  type: string;
  isFavorite: boolean;
  rating: number;
  numOfBedrooms: number;
  maxNumOfGuests: number;
  autor: Autor;
  city: City;
};

export type Autor = {
  name: string;
  autorAvatar: string;
  isPro: boolean;
};


export type City = {
  name: string;
}


export type Rating = {
  rating: string;
  comment: string;
}
