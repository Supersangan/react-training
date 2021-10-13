import React from 'react';
import { AuthorAvatar } from '../../../../AuthorLink/AuthorAvatar';
import { AuthorName } from '../../../../AuthorLink/AuthorName';
import { AuthorLink } from '../../../../AuthorLink';
import styles from './header.css';
import { CreatedAt } from '../../../../CreatedAt';
import { InlineText } from '../../../../InlineText';

export function Header() {
  return (
    <div className={styles.root}>
      <span className={styles.label}>Лига программистов</span>

      <div className={styles.metaData}>
        <AuthorLink href="#user-link">
          <AuthorAvatar />
          <AuthorName name="Сергей Маргулис" />
        </AuthorLink>

        <CreatedAt text="3 часа" />
      </div>
    </div>
  );
}
