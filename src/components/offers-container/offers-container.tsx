import { Offer } from '../../types/offers';
import AvailableOffers from '../available-offers/available-offers';

interface OffersContainerProps {
  offers: Offer[];
  handleCardMouseEnter: (id: Offer['id']) => void;
  handleCardMouseLeave: () => void;
}

function OffersContainer({
  offers,
  handleCardMouseEnter,
  handleCardMouseLeave,
}: OffersContainerProps): JSX.Element {

  return (
    <AvailableOffers
      offers={offers}
      handleCardMouseEnter={handleCardMouseEnter}
      handleCardMouseLeave={handleCardMouseLeave}
    />
  );
}

export default OffersContainer;
