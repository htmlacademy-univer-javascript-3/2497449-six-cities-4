import MainScreen from '../../../pages/main-screen/main-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../../const';
import FavoritesScreen from '../../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../../pages/login-screen/login-screen';
import OfferScreen from '../../../pages/offer-screen/offer-screen';
import PageNotFound from '../../../pages/page-not-found/page-not-found';
import { AuthorizationStatus } from '../../../const';
import PrivateRoute from '../../../pages/private-route/private-route';
import { Offer } from '../../../types/offers';
import { Review } from '../../../types/reviews';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { listFilling } from '../../../store/action';

type AppScreenProps = {
  reviews: Review[];
}

function App({reviews} : AppScreenProps): JSX.Element {
  const offers: Offer[] = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(listFilling());
  const favorites = offers.filter((o) => o.isFavorite);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path ={AppRoute.Main}
          element={<MainScreen favorites={favorites}/>}
        />
        <Route
          path ={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }

        />
        <Route
          path ={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path ={AppRoute.Offer}
          element={<OfferScreen reviews={reviews} offers={offers}/>}
        />
        <Route
          path ={'*'}
          element={<PageNotFound/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
