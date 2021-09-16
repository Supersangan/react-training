import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/2859475/screenshots/6960566/media/f3575c6f3f42056195c42591e1ff99a5.jpg?compress=1&resize=1200x900"
        alt="preview"
      />
    </div>
  );
}
