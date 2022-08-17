import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <i className='fa-solid fa-clapperboard' /> Movie Web Service
      </h1>
    </header>
  );
};

export default Header;
