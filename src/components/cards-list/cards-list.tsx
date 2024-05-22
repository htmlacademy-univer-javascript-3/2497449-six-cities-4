import Card from '../cards/card';
import { Offer } from '../../types/offers';
import { CardType } from '../../const';

type CardsListProps = {
    offers: Offer[];
};

export default function CardsList({ offers: offers}: CardsListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          cardInfo={offer}
          typeClassName={CardType.regular}
        />
      ))}
    </div>
  );
}
