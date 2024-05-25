import { Offer, Location, FullOffer } from '../../types/offers.ts';
import Map from '../map/map.tsx';

type OfferCardMapProps = {
  offers: Offer[];
  centerCoordinates: Location;
  selectedOfferId: string;
  currentOffer: FullOffer;
};

function OfferCardMap({
  offers,
  centerCoordinates,
  selectedOfferId,
  currentOffer,
}: OfferCardMapProps) {
  return (
    <section className="offer__map map">
      <Map
        offers={offers}
        centerCoordinates={centerCoordinates}
        selectedOfferId={selectedOfferId}
        scrollWheelZoom={false}
        currentOffer={currentOffer}
      />
    </section>
  );
}

export default OfferCardMap;
