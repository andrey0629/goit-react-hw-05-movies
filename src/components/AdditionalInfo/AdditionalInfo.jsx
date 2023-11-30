import { StyledLink } from 'components/Details/Details.styled';
const AdditionalInfo = () => {
  return (
    <ul>
      <h4> Additional information</h4>
      <li>
        <StyledLink to="cast">Cast</StyledLink>
      </li>
      <li>
        <StyledLink to="reviews">Reviews</StyledLink>
      </li>
    </ul>
  );
};
export default AdditionalInfo;
