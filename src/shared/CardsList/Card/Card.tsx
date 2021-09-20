import React from 'react';
import { msToTimeBefore } from '../../../utils/js/msToTimeBefore';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface IPostData {
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

interface ICardProps {
  post: IPostData;
}

export function Card({ post }: ICardProps) {
  const {
    authorName,
    created,
    link,
    previewSrc,
    score,
    title,
    authorAvatarSrc,
  } = post;

  let published = msToTimeBefore(Date.now() - created * 1000);  
  
  return (
    <li className={styles.card}>
      <TextContent link={link} title={title} published={published} authorName={authorName} authorAvatarSrc={authorAvatarSrc}/>
      <Preview src={previewSrc} />
      <Menu />
      <Controls score={score}/>
    </li>
  );
}
function msToTimeFrom(arg0: number) {
  throw new Error('Function not implemented.');
}

