import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div className="container">
      <h2>404 error</h2>
      <Link to={'/'}>Go to Main Page</Link>
    </div>
  );
}

export default PageNotFound;

