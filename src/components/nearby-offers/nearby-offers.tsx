import CardsList from '../cards-list/cards-list';
import { Offer } from '../../types/offers';

type NearbyOffersProps = {
  nearPlaces: Offer[];
};

function NearbyOffers({ nearPlaces }: NearbyOffersProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <CardsList offers={nearPlaces} cardType="near-places" />
      </div>
    </section>
  );
}

export default NearbyOffers;
