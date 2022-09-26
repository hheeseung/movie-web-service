import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href='#home'>Movie Viewer</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link href='#home'>Popular</Nav.Link>
        <Nav.Link href='#features'>High Rated</Nav.Link>
        <Nav.Link href='#pricing'>Latest</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
