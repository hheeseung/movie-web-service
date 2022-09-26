import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Movie Viewer</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link onClick={() => navigate('/movie/popular_movies')}>
            Popular
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/movie/high_rated_movies')}>
            High Rated
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/movie/latest_movioes')}>
            Latest
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
