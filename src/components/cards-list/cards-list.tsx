import Card from '../cards/card';
import { Offer } from '../../types/offers';
import { useAppSelector } from '../../hooks';
import { getSorting } from '../../utils';


type CardsListProps = {
    offers: Offer[];
    setActiveCard(id:number): void;
    isMainScreen: boolean;
};

export default function CardsList({ offers: offers, setActiveCard, isMainScreen }: CardsListProps) {
  const selectedSortType = useAppSelector((state)=>state.sortType);
  return (
    <div className="cities__places-list places__list tabs__content">
      {getSorting(offers, selectedSortType).map((offer) =>
        <Card isMainScreen = {isMainScreen} onCardMouseOver = {setActiveCard} key={offer.id} offer={offer}/>)};
    </div>
  );
}
