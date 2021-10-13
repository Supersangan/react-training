import React, { useState } from 'react';
import { Answer } from '../../../../Answer';
import { IconComments } from '../../../../icons';
import styles from './answerbutton.css';

interface IAnswerButtonProps {
  userName: string;
}

export function AnswerButton({ userName }: IAnswerButtonProps) {
  const [isAnswerFormOpened, setIsAnswerFormOpened] = useState(false);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setIsAnswerFormOpened(!isAnswerFormOpened);
  }

  return (
    <button className={styles.root} onClick={handleClick}>
      <span className={styles.icon}>
        <IconComments width="14px" />
      </span>
      Ответить
      {isAnswerFormOpened && (
        <Answer
          userName={userName}
          onClose={() => {
            setIsAnswerFormOpened(false);
          }}
        />
      )}
    </button>
  );
}
