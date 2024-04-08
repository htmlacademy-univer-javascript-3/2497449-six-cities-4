import Card from '../cards/card';
import { Offer } from '../../types/offers';


type CardsListProps = {
    offers: Offer[];
    setActiveCard(id:number): void;
    isMainScreen: boolean;
};

export default function CardsList({ offers: offers, setActiveCard, isMainScreen }: CardsListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <Card isMainScreen = {isMainScreen} onCardMouseOver = {setActiveCard} key={offer.id} offer={offer}/>)};
    </div>
  );
}
