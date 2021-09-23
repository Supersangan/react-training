import React from 'react';
import styles from './comment.css';
import { Controls } from './Controls';
import { Header } from './Header';

export function Comment() {
  return (
    <div>
      <Header />
      Текст комментария
      <Controls />
    </div>
  );
}
