import { Offer } from '../../types/offers';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
    offers: Offer[];
}

export default function FavoritesCardsList({offers}: FavoritesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true).map((offer) => offer);
  const favoriteCities = favoriteOffers.map((offer) => offer.city.name).filter((value, index, self) => self.indexOf(value) === index);
  return (
    <>
      { Array.from(favoriteCities.values()).map((city) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                {city}
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => <FavoriteCard key={offer.id} offer={offer}/>)}
          </div>
        </li>
      )
      )}
    </>
  );
}
