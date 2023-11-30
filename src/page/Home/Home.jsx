import { fetchGetTrending } from 'api/fetch';
import HomeList from 'components/HomeList/HomeList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();

  const [movies, setMovie] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const moviesData = await fetchGetTrending();
        setMovie(moviesData);
      }
      fetchData();
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <HomeList movies={movies} location={location} />;
};
export default Home;
