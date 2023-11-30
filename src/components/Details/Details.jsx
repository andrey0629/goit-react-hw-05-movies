import PropTypes from 'prop-types';
import { DitailsContainr, InfoBlock } from './Details.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const Details = ({ movie }) => {
  return (
    <>
      <DitailsContainr>
        <div>
          {!movie.backdrop_path ? (
            'Sorry poster not found!'
          ) : (
            <img src={`${baseImageUrl}${movie.backdrop_path}`} alt="" />
          )}
        </div>
        <InfoBlock>
          <h1>{movie.title || movie.name}</h1>
          <p>Popularity:{movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres &&
              movie.genres.map(({ name, id }) => {
                return <li key={id}>{name}</li>;
              })}
          </ul>
        </InfoBlock>
      </DitailsContainr>
    </>
  );
};

Details.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Details;
