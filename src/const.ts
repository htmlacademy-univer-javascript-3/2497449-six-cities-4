export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer ='/offer/:id'

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

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  {
    id: 1,
    name: 'Paris',
  },
  {
    id: 2,
    name: 'Cologne',
  },
  {
    id: 3,
    name: 'Brussels',

  },
  {
    id: 4,
    name: 'Amsterdam',
  },
  {
    id: 5,
    name: 'Hamburg',
  },
  {
    id: 6,
    name: 'Dusseldorf',
  },
];
