import React from 'react';
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🙄</span>
        <br/>
        Ничего не найдено
      </h1>
      <p className={styles.description}>Данной страницы нет на нашем сайте</p>
    </div>
  );
};

export default NotFound;
