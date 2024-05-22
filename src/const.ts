export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer ='/offer/:id',

}
export enum CardType {
  favourites = 'favorites__card',
  nearest = 'near-places__card',
  regular = 'cities__card',
}
export enum AdClasses {
  ArticlePropertyAdClass = 'near-places__card place-card',
  ArticleMainAdClass = 'cities__card place-card',
  ImageWrapperPropertyAdClass = 'near-places__image-wrapper place-card__image-wrapper',
  ImageWrapperMainAdClass = 'cities__image-wrapper place-card__image-wrapper',
}

export enum MapClasses {
  SectionMainMapClass = 'cities__map map',
  SectionPropertyMapClass = 'offer__map map',
}
export const TIMEOUT_SHOW_ERROR = 2000;
export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 16,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 16,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 16,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 16,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 16,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 16,
    },
  },
];

export const SORT_TYPES = {
  0: 'Popular',
  1: 'Price: low to high',
  2: 'Price: high to low',
  3: 'Top rated first',
};

export const getRating = (rate: number) => `${(rate / 5) * 100}%`;
