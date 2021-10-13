import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnswerForm } from '../AnswerForm';
import styles from './answer.css';

interface IAnswerProps {
  userName: string;
  onClose: () => void;
}

export function Answer({ userName, onClose }: IAnswerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      event.stopPropagation();      
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  const node = document.querySelector('#answer_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.shadow}>
      <div className={styles.modal} ref={ref}>
        <AnswerForm userName={userName} />
      </div>
    </div>,
    node
  );
}
