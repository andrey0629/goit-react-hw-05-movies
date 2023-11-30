import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieDetailsReviews } from 'api/fetch';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const results = await fetchGetMovieDetailsReviews(id);
        setReviews(results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
    fetchCast();
  }, [id]);
  return (
    <ul>
      {reviews && reviews.length === 0
        ? 'Sorry, but no reviews have been found for this movie!'
        : reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
    </ul>
  );
};

export default Reviews;
