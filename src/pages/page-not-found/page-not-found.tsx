import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <div className="container">
      <h2>404 error</h2>
      <Link to={AppRoute.Main}>Go to Main Page</Link>
    </div>
  );
}

export default PageNotFound;

