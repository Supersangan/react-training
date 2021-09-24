import React from 'react';
import styles from './authorname.css';

interface IAuthorNameProps {
  name: string;
}

export function AuthorName({ name }: IAuthorNameProps) {
  return (
    <span className={styles.root}>
      {name}
    </span>
  );
}
