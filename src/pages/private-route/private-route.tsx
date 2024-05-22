import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({
  children,
  authorizationStatus,
}: PrivateRouteProps): JSX.Element {
  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;
  return hasAccess ? children : <Navigate to={'/login'} />;
}
export default PrivateRoute;
