import SortingCards from '../sorting-cards/sorting-cards.tsx';

import CardsList from '../cards-list/cards-list.tsx';
import { Offer } from '../../types/offers.ts';
import { getSelectedCity, useAppSelector } from '../../store';

type AvailableOffersProps = {
  offers: Offer[];
  handleCardMouseEnter: (id: Offer['id']) => void;
  handleCardMouseLeave: () => void;
};

function AvailableOffers({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
}: AvailableOffersProps) {
  const quantityOffers = offers.length;
  const cityName = useAppSelector(getSelectedCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {quantityOffers} places to stay in {cityName}
      </b>
      <SortingCards />
      <div className="cities__places-list places__list tabs__content">
        <CardsList
          cardType="cities"
          offers={offers}
          handleCardMouseEnter={handleCardMouseEnter}
          handleCardMouseLeave={handleCardMouseLeave}
        />
      </div>
    </section>
  );
}

export default AvailableOffers;
