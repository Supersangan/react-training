import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import { Comments } from './Comments';
import styles from './post.css';

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        history.push('/')
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      
      <div className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
          reprehenderit quo? Unde earum ab provident molestias beatae maxime
          vero at.
        </p>
        <p>
          Suscipit cupiditate molestias quam nihil! Accusantium a esse fugiat.
          Dolore, vel. Tempora quaerat ex numquam animi esse voluptatem? Iste,
          reprehenderit.
        </p>
        <p>
          Et quasi vitae perspiciatis. Dolor quae nostrum quaerat aliquam
          adipisci beatae aliquid. Aut, magni asperiores reprehenderit aliquid
          nobis praesentium totam?
        </p>
      </div>

      <Comments />
    </div>,
    node
  );
}
