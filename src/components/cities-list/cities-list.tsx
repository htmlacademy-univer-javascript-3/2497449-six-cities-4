import {useAppDispatch} from '../../hooks';
import {cityChange} from '../../store/action.ts';
import { City } from '../../types/offers.ts';
import { Cities } from '../../const.ts';


type CityProps = {
  city: City;
  cityChangeName: (city: City) => void;
};

const CityItem = ({city, cityChangeName}: CityProps): JSX.Element => (
  <li className="locations__item" onClick={() => cityChangeName(city)}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{city.name}</span>
    </a>
  </li>
);

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityChange = (city: City) => {
    dispatch(cityChange(city));
  };
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CityItem
          key={city.name}
          city={city}
          cityChangeName={handleCityChange}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
