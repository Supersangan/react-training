import React from 'react';
import { IPostData } from '..';
import { msToTimeBefore } from '../../../utils/js/msToTimeBefore';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  post: IPostData;
}

export function Card({ post }: ICardProps) {
  const { authorName, created, link, score, title } = post;

  let { previewSrc, authorAvatarSrc } = post;

  previewSrc =
    previewSrc == null
      ? 'https://cdn.dribbble.com/users/2859475/screenshots/6960566/media/f3575c6f3f42056195c42591e1ff99a5.jpg'
      : previewSrc;

  authorAvatarSrc =
    authorAvatarSrc == null
      ? 'https://cdn.dribbble.com/users/939433/screenshots/13626869/image.png?compress=1&resize=100x100'
      : authorAvatarSrc;

  let published = msToTimeBefore(Date.now() - created * 1000);

  return (
    <li className={styles.card}>
      <TextContent
        link={link}
        title={title}
        published={published}
        authorName={authorName}
        authorAvatarSrc={authorAvatarSrc}
      />
      <Preview src={previewSrc} />
      <Menu />
      <Controls score={score} />
    </li>
  );
}
function msToTimeFrom(arg0: number) {
  throw new Error('Function not implemented.');
}
