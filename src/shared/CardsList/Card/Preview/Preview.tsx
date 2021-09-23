import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  src: string;
}

export function Preview({ src }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={src}
        alt="preview"
      />
    </div>
  );
}
