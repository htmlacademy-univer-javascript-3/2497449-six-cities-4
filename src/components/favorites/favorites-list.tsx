import FavoritesListItem from './favorites-item';
import { Offer } from '../../types/offers';
import { CitiesNames } from '../../const';

const getFavouritesByCity = (favouriteList: Offer[]) =>
  favouriteList.reduce(
    (favouritesByCity: Record<string, Offer[]>, item: Offer) => {
      const cityName = item.city.name;
      favouritesByCity[cityName] = [
        ...(favouritesByCity[cityName] || []),
        item,
      ];
      return favouritesByCity;
    },
    {}
  );

type FavoriteListProps = {
  favoriteList: Offer[];
};

function FavoritesList({ favoriteList }: FavoriteListProps): JSX.Element {
  const favoritesByCity = getFavouritesByCity(favoriteList);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesByCity).map(
        ([cityName, offers]: [string, Offer[]]) => (
          <FavoritesListItem
            key={cityName}
            cityName={cityName as CitiesNames}
            offers={offers}
          />
        )
      )}
    </ul>
  );
}

export default FavoritesList;
