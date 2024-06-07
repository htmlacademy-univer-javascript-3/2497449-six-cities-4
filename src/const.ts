export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Routes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  MultipleOffersData = 'MULTIPLE_OFFERS_DATA',
  SingleOfferData = 'SINGLE_OFFER_DATA',
  FavouritesData = 'FAVOURITES_DATA',
  NearbyOffersData = 'NEARBY_OFFERS_DATA',
  ReviewsData = 'REVIEWS_DATA',
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export enum TitlePage {
  Main = 'Home',
  Favorites = 'Favorites',
  Login = 'Login',
}

export enum DescriptionPage {
  Main = 'Description main',
  Favorites = 'Description favorites',
  Login = 'Description login',
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

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
  Review = '/comments',
  Nearby = '/nearby',
  Favorite = '/favorite',
}
export enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}
export const routeNameToPageInfoMap: Record<
  string,
  { title: string; description: string }
> = {
  [Routes.Main]: {
    title: TitlePage.Main,
    description: DescriptionPage.Main,
  },
  [Routes.Favorites]: {
    title: TitlePage.Favorites,
    description: DescriptionPage.Favorites,
  },
  [Routes.Login]: {
    title: TitlePage.Login,
    description: DescriptionPage.Login,
  },
};

export enum CitiesNames{
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const SORT_TYPES = {
  0: 'Popular',
  1: 'Price: low to high',
  2: 'Price: high to low',
  3: 'Top rated first',
};

export const getRating = (rate: number) => `${Math.round((rate / 5) * 100 / 20) * 20}%`;
