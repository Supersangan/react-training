import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardsList() {
  const { posts } = useContext(postsContext);  

  return (
    <ul className={styles.cardsList}>
      <Card
        key={-1}
        post={{
          authorName: 'Дмитрий Гришин',
          created: 1632187407,
          link: '#123',
          previewSrc: null,
          score: 197,
          title: 'Реализация намеченных плановых заданий',
          authorAvatarSrc: null,
        }}
      />
      {posts != undefined &&
        posts.map((post, key) => {
          return <Card key={key} post={post} />;
        })}
    </ul>
  );
}
