import CardsList from '../cards-list/cards-list';
import { Offer } from '../../types/offers';
import { Link } from 'react-router-dom';
import { Routes, CitiesNames } from '../../const';
import { changeCity, useAppDispatch } from '../../store';

type FavoritesListItemProps = {
  cityName: CitiesNames;
  offers: Offer[];
};

function FavoritesListItem({
  cityName,
  offers,
}: FavoritesListItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = () => {
    dispatch(changeCity(cityName));
  };

  return (
    <li key={cityName} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={Routes.Main}
            onClick={handleCityClick}
          >
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList offers={offers} cardType={'favorites'} />
      </div>
    </li>
  );
}

export default FavoritesListItem;
