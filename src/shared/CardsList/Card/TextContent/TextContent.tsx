import React, { useState } from 'react';
import { Post } from '../../../Post';
import { CreatedAt } from '../../../CreatedAt';
import styles from './textcontent.css';
import { AuthorAvatar } from '../../../AuthorLink/AuthorAvatar';
import { AuthorLink } from '../../../AuthorLink';
import { AuthorName } from '../../../AuthorLink/AuthorName';
import { Link } from 'react-router-dom';

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
      <AuthorLink href="#user-link">
          <AuthorAvatar src={authorAvatarSrc}/>
          <AuthorName name={authorName} />
        </AuthorLink>


        <CreatedAt labeled text={published} />
      </div>

      <h2 className={styles.title}>
        <Link
          className={styles.postLink}
          to={`/posts/${link}`}
        >
          {title}
        </Link>
      </h2>
    </div>
  );
}
