import React, { useState } from 'react';
import { Post } from '../../../Post';
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
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={authorAvatarSrc} alt="avatar" />

          <a className={styles.username} href="#user-url">
            {authorName}
          </a>
        </div>

        <CreatedAt published={published} />
      </div>

      <h2 className={styles.title}>
        <a
          className={styles.postLink}
          href={`#${link}`}
          onClick={() => {
            setIsModalOpened(true);
          }}
        >
          {title}
        </a>

        {isModalOpened && (
          <Post
            onClose={() => {
              setIsModalOpened(false);
            }}
          />
        )}
      </h2>
    </div>
  );
}
