import { Offer } from '../types/offers';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Hotel',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage:
      'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg',
  },
  {
    id: '2',
    title: 'Hotel',
    type: 'apartment',
    price: 140,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage:
      'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg',
  },
  {
    id: '3',
    title: 'Hotel',
    type: 'apartment',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.24,
    previewImage:
      'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg',
  },
  {
    id: '4',
    title: 'Hotel',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage:
      'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg',
  },
  {
    id: '5',
    title: 'Hotel',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage:
      'https://w.forfun.com/fetch/85/85ae14568a42dcfeb55be68307d1a797.jpeg',
  },
];
