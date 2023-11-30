import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieDetailsCredits } from 'api/fetch';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function fetchCast() {
      try {
        const results = await fetchGetMovieDetailsCredits(id);
        setCast(results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchCast();
  }, [id]);
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => {
        if (!profile_path) {
          return (profile_path = '1E5baAaEse26fej7uHcjOgEE2t2.jpg');
        }
        return (
          <li key={id}>
            <img
              src={`${baseImageUrl}${profile_path}`}
              style={{
                width: 180,
                borderRadius: 8,
              }}
              alt=""
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
