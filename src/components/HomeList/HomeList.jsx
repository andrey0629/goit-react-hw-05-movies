import { Link } from 'react-router-dom';

const HomeList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default HomeList;
