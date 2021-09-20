import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card';
import styles from './cardslist.css';

export function CardsList() {
  const { posts } = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {posts != undefined &&
        posts.map((post, key) => {
          return <Card key={key} post={post} />;
        })}
    </ul>
  );
}
