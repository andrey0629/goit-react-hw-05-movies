import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MoviesItem = ({ response, location }) => {
  return (
    <ul>
      {response.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesItem.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesItem;
