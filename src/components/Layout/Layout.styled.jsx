import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 10px;
  gap: 30px;
  font-size: 20px;
  border-bottom: solid 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin-bottom: 30px;
`;
export const StyledNavLink = styled(NavLink)`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  @media (min-width: 768px) {
    .button-63 {
      font-size: 24px;
      min-width: 196px;
    }
  }
  &.active {
    color: #ff00dd;
    outline: 0;
  }
`;
export const Container = styled.main`
  padding: 20px;
`;
