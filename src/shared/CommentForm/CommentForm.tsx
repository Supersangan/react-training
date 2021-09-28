import React, { ChangeEvent, FormEvent } from 'react';
import { EIcons, Icon } from '../Icon';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function CommentForm({ value, onChange, onSubmit }: ICommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <button className={styles.buttonPluse} type="button">
        <Icon name={EIcons.pluse} size={10} />
      </button>

      <textarea
        className={styles.input}
        value={value}
        onChange={onChange}
      ></textarea>

      <div className={styles.controls}>
        <div className={styles.controlsButtons}>
          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.code} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.image} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.document} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.download} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.user} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.refresh} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.link} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.voice} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.answer} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.pencil} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.a} />
          </button>

          <button className={styles.controlsButton} type="button">
            <Icon name={EIcons.pdf} />
          </button>
        </div>

        <button className={styles.buttonEmoji} type="button">
          <Icon name={EIcons.emoji} size={20} />
        </button>

        <button className={styles.buttonSubmit} type="submit">
          <span className={styles.buttonText}>Комментировать</span>
          <span className={styles.buttonArrow}>
            <Icon name={EIcons.send} size={10} />
          </span>
        </button>
      </div>
    </form>
  );
}
