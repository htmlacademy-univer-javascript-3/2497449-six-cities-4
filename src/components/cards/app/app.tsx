import {
  checkAuthAction,
  fetchOffersAction,
  getHasError,
  getIsOffersLoading,
  store,
  useAppSelector
} from '../../../store';
import PageNotFound from '../../../pages/page-not-found/page-not-found';
import AppRoutes from '../../app-routes/app-routes';
import Loader from '../../loader/loader';
import { useFetchFavorites } from './hook';
store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);
  const hasError = useAppSelector(getHasError);

  useFetchFavorites();

  if (isOffersDataLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <PageNotFound />;
  }

  return <AppRoutes />;
}

export default App;
