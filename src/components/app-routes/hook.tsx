import { getAuthorizationStatus, useAppSelector } from '../../store';
import { Routes } from '../../const';
import PageLayout from '../page-layout/page-layout';
import MainScreen from '../../pages/main-screen/main-screen';
import PrivateRoute from '../../pages/private-route/private-route';
import MainRouteRedirection from '../main-rout-redirection/main-rout-redirection';

import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';

function useAppRoutes() {
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  const routes = [
    {
      path: Routes.Main,
      element: <MainScreen />,
      layout: <PageLayout isHeaderActiveLogo={false} />,
    },
    {
      path: Routes.Login,
      element: (
        <MainRouteRedirection authorizationStatus={userAuthorizationStatus}>
          <LoginScreen />
        </MainRouteRedirection>
      ),
      layout: <PageLayout isHeaderUserNavigation={false} />,
    },
    {
      path: Routes.Favorites,
      element: (
        <PrivateRoute userAuthorizationStatus={userAuthorizationStatus}>
          <FavoritesScreen />
        </PrivateRoute>
      ),
      layout: <PageLayout isFooterShow />,
    },
    {
      path: Routes.Offer,
      element: <OfferScreen />,
      layout: <PageLayout isFooterShow = {false} />,
    },
    {
      path: Routes.NotFound,
      element: (
        <PageLayout isFooterShow>
          <PageNotFound />
        </PageLayout>
      ),
    },
  ];

  return { routes };
}

export default useAppRoutes;
