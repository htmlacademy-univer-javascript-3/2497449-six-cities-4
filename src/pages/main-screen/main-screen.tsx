import CardsList from '../../components/cards-list/cards-list';
import { Offer } from '../../types/offers';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import CardsSorting from '../../components/sorting-cards/sorting-cards';
import Header from '../../components/header/header';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [, setCurrentCityOffers] = useState<Offer[]>(offers);
  const city = useAppSelector((state) => state.city.name);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);
  const [, setActiveCard] = useState(0);

  return (
    <div className ="page page--gray page--main">
      <Header/>
      <main className ="page__main page__main--index">
        <h1 className ="visually-hidden">Cities</h1>
        <div className ="tabs">
          <section className ="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className ="cities">
          {offers.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
                <CardsSorting />
                <CardsList isMainScreen offers={offers} setActiveCard={setActiveCard}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} />
                </section>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    {`We could not find any property available at the moment in
                    ${city}`}
                  </p>
                </div>
                <div className="cities__right-section"></div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );

}

export default MainScreen;
