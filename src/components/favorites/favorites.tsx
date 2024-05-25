import { Offer } from '../../types/offers';
import FavoritesList from './favorites-list';

type FavouritesProps = {
  favorites: Offer[];
};

function Favorites({ favorites }: FavouritesProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoritesList favoriteList={favorites} />
    </section>
  );
}

export default Favorites;
