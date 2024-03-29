import React from 'react';
import { CommentFormContainer } from '../../CommentFormContainer/CommentFormContainer';
import { Comment } from './Comment';
import styles from './comments.css';
import { Sorting } from './Sorting';

export function Comments() {
  return (
    <div className={styles.root}>
      <div className={styles.sorting}>
        <Sorting />
      </div>

      <div className={styles.commentForm}>
        <CommentFormContainer />
      </div>

      <Comment>
        <Comment />
        <Comment>
          <Comment />
          <Comment />
        </Comment>
        <Comment />
      </Comment>
    </div>
  );
}
