import React from 'react';
import styles from './createdat.css';

interface ITextContentProps {
  labeled?: boolean;
  text: string;
}

export function CreatedAt({ labeled = false, text }: ITextContentProps) {
  return (
    <span className={styles.root}>
      {labeled && <span className={styles.publishedLabel}>Опубликовано </span>}
      {text} назад
    </span>
  );
}
