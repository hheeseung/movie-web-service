import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footer__github}>
      <a href='https://github.com/hheeseung/movie-web-service'>
        <i className='fa-brands fa-github' />
      </a>
    </p>
  </footer>
);

export default Footer;
