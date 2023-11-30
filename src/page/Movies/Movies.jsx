import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from 'api/fetch';
import { Form } from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
const Movies = () => {
  const [response, setResponse] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams === '') {
      return;
    }
    try {
      async function fetchFilms() {
        const { results } = await fetchSearchMovies(searchParams);
        setResponse(results);
      }
      fetchFilms();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  const handleSubmit = ({ inputValue }) => {
    if (inputValue.trim() === '') {
      return;
    }
    setSearchParams({ query: inputValue });
    setResponse([]);
  };
  return (
    <>
      <Form requestFilms={handleSubmit} />
      <MoviesList response={response} location={location} />
    </>
  );
};
export default Movies;
