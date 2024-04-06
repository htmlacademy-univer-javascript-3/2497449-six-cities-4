import { Offer } from '../types/offers';


export const offers: Offer[] = [

  {
    id: '1',
    img: 'img/apartment-01.jpg',
    isPremium: true,
    price: '120',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartament',
    isFavorite: false,
    rating: 4.8,
    numOfBedrooms: 3,
    maxNumOfGuests: 4,
    autor: {name: 'Angelina', autorAvatar: 'img/avatar-angelina.jpg', isPro: true},
    city: {name: 'Amsterdam'}
  },
  {
    id: '2',
    img: 'img/room.jpg',
    isPremium: false,
    price: '80',
    title: 'Wood and stone place',
    type: 'Room',
    isFavorite: true,
    rating: 4,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam'}
  },

  {
    id: '3',
    img: 'img/apartment-02.jpg',
    isPremium: false,
    price: '132',
    title: 'Canal View Prinsengracht',
    type: 'Apartament',
    isFavorite: true,
    rating: 4,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam'}
  },
  {
    id: '4',
    img: 'img/apartment-03.jpg',
    isPremium: true,
    price: '180',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartament',
    isFavorite: false,
    rating: 5,
    numOfBedrooms: 1,
    maxNumOfGuests: 1,
    autor: {name: 'Max', autorAvatar: 'img/avatar-max.jpg', isPro: false},
    city: {name: 'Amsterdam'}
  },

];

