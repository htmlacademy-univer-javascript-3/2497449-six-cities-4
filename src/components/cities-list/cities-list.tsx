import cn from 'classnames';
import { CitiesNames } from '../../const';
import { changeCity, useAppDispatch } from '../../store';
import { memo } from 'react';

type CitiesListProps = {
  selectedCity: CitiesNames;
};

function CitiesList({ selectedCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const cities: CitiesNames[] = [
    CitiesNames.Paris,
    CitiesNames.Cologne,
    CitiesNames.Brussels,
    CitiesNames.Amsterdam,
    CitiesNames.Hamburg,
    CitiesNames.Dusseldorf,
  ];

  const handleCityChange = (
    evt: React.MouseEvent<HTMLAnchorElement>,
    city: CitiesNames
  ) => {
    evt.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': selectedCity === city,
                })}
                href="#"
                onClick={(evt) => handleCityChange(evt, city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const CitiesListMemo = memo(CitiesList);

export default CitiesListMemo;
