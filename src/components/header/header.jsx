import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Movie Web Service</h1>
      <p className={styles.header__description}>
        This site allows you to view ratings and information about the top 50
        movies on the YTS site.
      </p>
    </header>
  );
};

export default Header;
