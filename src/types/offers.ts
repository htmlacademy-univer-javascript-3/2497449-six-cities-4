export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isPremium: boolean;
  city: City;
  description: string;
  isFavorite: boolean;
  rating: number;
  numOfBedrooms: number;
  maxNumOfGuests: number;
  autor: Autor;
};

export type Autor = {
  name: string;
  autorAvatar: string;
  isPro: boolean;
};


export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}


export type Rating = {
  rating: string;
  comment: string;
}

