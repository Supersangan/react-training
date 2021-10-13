import React from 'react';
import styles from './authoravatar.css';

interface IAuthorAvatarProps {
  src?: string;
}

export function AuthorAvatar({ src }: IAuthorAvatarProps) {
  src = src ? src : "https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100";

  return <img className={styles.root} src={src} alt="avatar" />;
}
