import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand
            style={{cursor: 'pointer'}}
            onClick={() => navigate('/')}
          >
            Movie Viewer
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => navigate('/movie/popular_movies')}>
              Popular
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/movie/high_rated_movies')}>
              High Rated
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/movie/latest_movies')}>
              Latest
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
