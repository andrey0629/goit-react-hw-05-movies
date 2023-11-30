import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, StyledNavLink } from './Layout.styled';
const Layout = () => {
  return (
    <div>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
export default Layout;
