
export type Autor = {
  name: string;
  autorAvatar: string;
  isPro: boolean;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};
export type City = {
  name: string;
  location: Location;
}

export type Rating = {
  rating: string;
  comment: string;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type FullOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Autor;
  maxAdults: number;
  images: string[];
};
