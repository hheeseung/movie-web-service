import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className='d-block w-100 carousel-height'
        src='/images/splash_01.jpg'
        alt='First slide'
      />
      <Carousel.Caption>
        <h3>See Popular Movies</h3>
        <p>
          Check out the movies that have received the most likes from the
          public!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100 carousel-height'
        src='/images/splash_02.jpg'
        alt='Second slide'
      />

      <Carousel.Caption>
        <h3>Browse High Rated Movies Here</h3>
        <p>List of movies you should never miss in your life!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className='d-block w-100 carousel-height'
        src='/images/splash_03.jpg'
        alt='Third slide'
      />

      <Carousel.Caption>
        <h3>Recently Released Movies Are Updated</h3>
        <p>Browse the latest movies and catch up with trends right away!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Banner;
