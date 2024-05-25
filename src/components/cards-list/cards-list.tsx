import Card from '../cards/card.tsx';
import { getSorting } from '../../utils.ts';
import { getSelectedSortType, useAppSelector } from '../../store';
import { Offer } from '../../types/offers.ts';
import { memo } from 'react';
export type CardType = 'cities' | 'favorites' | 'near-places';

type CardListProps = {
  offers: Offer[];
  cardType: CardType;
  handleCardMouseEnter?: (id: Offer['id']) => void;
  handleCardMouseLeave?: () => void;
};

function CardsList({
  offers,
  cardType,
  handleCardMouseLeave,
  handleCardMouseEnter,
}: CardListProps): JSX.Element {

  const selectedSortType = useAppSelector(getSelectedSortType);
  const sortedOffers = getSorting[selectedSortType](offers);

  return (
    <>
      {sortedOffers.map((offer) => (
        <Card
          key={offer.id}
          {...offer}
          cardType={cardType}
          handleCardMouseEnter={(evt) => handleCardMouseEnter?.(evt)}
          handleCardMouseLeave={() => handleCardMouseLeave?.()}
        />
      ))}
    </>
  );
}

const OffersListMemo = memo(CardsList);

export default OffersListMemo;
