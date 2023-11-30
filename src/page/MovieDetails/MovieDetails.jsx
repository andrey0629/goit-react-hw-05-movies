import { Suspense, useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchGetMovieDetails } from 'api/fetch';
import { Outlet } from 'react-router-dom';
import Details from 'components/Details/Details';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { StyledLink } from 'components/Details/Details.styled';
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchDetails() {
      try {
        const results = await fetchGetMovieDetails(id);
        if (!results) {
          setStatus('rejected');
          return;
        }
        setMovie(results);
        setStatus('resolve');
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setStatus('rejected');
      }
    }
    fetchDetails();
  }, [id]);

  return (
    <>
      <StyledLink to={backLinkLocationRef.current}>Go-back</StyledLink>

      {status === 'rejected' ? (
        'Sorry, but no information was found for this movie!'
      ) : (
        <div>
          <Details movie={movie} />
          <AdditionalInfo />
          <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
