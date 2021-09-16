import React from 'react';
import { CreatedAt } from './CreatedAt';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100"
            alt="avatar"
          />

          <a className={styles.username} href="#user-url">
            Дмитрий Гришин
          </a>
        </div>

        <CreatedAt />
      </div>

      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          Следует отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
}
