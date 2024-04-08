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
