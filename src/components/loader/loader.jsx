import React from 'react';
import styles from './loader.module.css';

const Loader = () => (
  <div className={styles.load}>
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
