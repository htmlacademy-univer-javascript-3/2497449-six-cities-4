import cn from 'classnames';
import { getFavorites, getIsFavoritesLoading, useAppSelector } from '../../store';
import Loader from '../../components/loader/loader';
import EmptyFavorites from '../../components/favorites/empty-favorites';
import Favorites from '../../components/favorites/favorites';

function FavoutitesScreen(): JSX.Element {
  const isFavouritesLoading = useAppSelector(getIsFavoritesLoading);
  const favorites = useAppSelector(getFavorites);
  const isEmptyFavorites = favorites.length === 0;

  if (isFavouritesLoading) {
    return <Loader />;
  }

  return (
    <main
      className={cn('page__main page__main--favorites', {
        'page__main--favorites-empty': isEmptyFavorites,
      })}
    >
      <div className="page__favorites-container container">
        {isEmptyFavorites ? (
          <EmptyFavorites />
        ) : (
          <Favorites favorites={favorites} />
        )}
      </div>
    </main>
  );
}

export default FavoutitesScreen;
