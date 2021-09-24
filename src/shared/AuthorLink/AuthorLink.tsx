import React, { Children } from 'react';
import styles from './authorlink.css';

interface IAuthorLinkProps {
  href: string;
  children?: React.ReactNode;
}

export function AuthorLink({ href, children }: IAuthorLinkProps) {
  return (
    <a className={styles.root} href={href}>
      {children}
    </a>
  );
}
