export type Offer = {
  id: string;
  img: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  description: string;
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
  longitude: number;
  latitude: number;
  zoom: number;
}


export type Rating = {
  rating: string;
  comment: string;
}
