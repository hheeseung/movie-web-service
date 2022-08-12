import React from 'react';
import styles from './header.module.css';

const Header = ({title, description}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{title}</h1>
      <p className={styles.header__description}>{description}</p>
    </header>
  );
};

export default Header;
