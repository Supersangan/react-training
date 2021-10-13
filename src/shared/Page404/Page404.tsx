import React from 'react';
import { Link } from 'react-router-dom';
import styles from './page404.css';

export function Page404() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Ошибка 404 — страница не найдена =(</h1>
      <p className={styles.text}>
        Но Вы можете <Link className={styles.link} to="/posts/">перейти</Link> к лучшим постам
      </p>
    </div>
  );
}
