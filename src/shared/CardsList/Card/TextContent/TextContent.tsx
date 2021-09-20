import React from 'react';
import { CreatedAt } from './CreatedAt';
import styles from './textcontent.css';

interface ITextContentProps {
  link: string;
  title: string;
  published: string;
  authorName: string;
  authorAvatarSrc: string;
}

export function TextContent(props: ITextContentProps) {
  const { link, title, published, authorName, authorAvatarSrc } = props;

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src={
              authorAvatarSrc ||
              'https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100'
            }
            alt="avatar"
          />

          <a className={styles.username} href="#user-url">
            {authorName}
          </a>
        </div>

        <CreatedAt published={published} />
      </div>

      <h2 className={styles.title}>
        <a className={styles.postLink} href={`#${link}`}>
          {title}
        </a>
      </h2>
    </div>
  );
}
