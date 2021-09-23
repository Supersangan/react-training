import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useRef,
  useState,
} from 'react';
import { commentContext } from '../context/commentContext';
import { EIcons, Icon } from '../Icon';
import styles from './commentform.css';

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.buttonPluse} type="submit">
        <Icon name={EIcons.pluse} size={10} />
      </button>

      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      ></textarea>

      <div className={styles.controls}>
        <div className={styles.controlsButtons}>
          <button className={styles.controlsButton}>
            <Icon name={EIcons.code} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.image} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.document} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.download} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.user} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.refresh} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.link} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.voice} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.answer} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.pencil} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.a} />
          </button>

          <button className={styles.controlsButton}>
            <Icon name={EIcons.pdf} />
          </button>
        </div>

        <button className={styles.buttonEmoji} type="submit">
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
