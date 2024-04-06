import Card from '../cards/card';
import { Offer } from '../../types/offers';
import { useState } from 'react';

type CardsListProps = {
    offers: Offer[];
};

export default function CardsList({ offers: offers }: CardsListProps) {
  const [activeCard, setActiveCard] = useState({id:0});
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card onCardMouseOver = {setActiveCard} key={activeCard.id + offer.id} offer={offer}/>)};
    </div>
  );
}
