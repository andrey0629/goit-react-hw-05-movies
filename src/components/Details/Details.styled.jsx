import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
export const StyledLink = styled(Link)`
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  margin: 10px 0 10px 0;

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
export const DitailsContainr = styled.div`
  display: flex;
  border-bottom: solid 2px rgba(0, 0, 0, 0.3);
  padding: 15px 0 15px 0;
  margin-bottom: 20px;
`;
export const InfoBlock = styled.div`
  padding: 10px;
`;
