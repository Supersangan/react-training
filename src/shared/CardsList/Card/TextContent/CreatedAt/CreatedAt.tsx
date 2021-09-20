import React from 'react';
import styles from './createdat.css';

interface ITextContentProps {
  published: string;
}

export function CreatedAt({published}: ITextContentProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>{published} назад
    </span>
  );
}
