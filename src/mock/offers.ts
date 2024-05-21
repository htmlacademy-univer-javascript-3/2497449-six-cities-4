import { Offer } from '../types/offers';


export const offers: Offer[] = [

  {
    id: '1',
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartament',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    isFavorite: false,
    rating: 4.8,
    numOfBedrooms: 3,
    maxNumOfGuests: 4,
    autor: {name: 'Angelina', autorAvatar: 'img/avatar-angelina.jpg', isPro: true},
    city: {name: 'Amsterdam', location: {latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10 }}
  },
  {
    id: '2',
    previewImage: 'img/room.jpg',
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'Room',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    isFavorite: true,
    rating: 4,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam' , location: {latitude: 52.360955394350, longitude: 4.85309666406198, zoom: 10 }}
  },

  {
    id: '3',
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartament',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    isFavorite: true,
    rating: 4,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam', location: {latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 10 }}
  },
  {
    id: '4',
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartament',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    isFavorite: false,
    rating: 5,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam', location: {latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 10 }}
  },

];

