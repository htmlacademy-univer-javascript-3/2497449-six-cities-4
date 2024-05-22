import MainScreen from '../../../pages/main-screen/main-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FavoritesScreen from '../../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../../pages/login-screen/login-screen';
import OfferScreen from '../../../pages/offer-screen/offer-screen';
import PageNotFound from '../../../pages/page-not-found/page-not-found';
import { AuthorizationStatus } from '../../../const';
import PrivateRoute from '../../../pages/private-route/private-route';
import { useAppSelector } from '../../../hooks';
import LoadingScreen from '../../../pages/loading-screen/loading-screen';


function App(): JSX.Element | null {
  const authorizationStatus: AuthorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<MainScreen />} />
        <Route
          path="/favourites"
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/offer/:id" element={<OfferScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

