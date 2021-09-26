import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { EIcons, Icon } from '../Icon';
import styles from './answerform.css';

interface IAnswerFormProps {
  userName: string;
}

export function AnswerForm({ userName }: IAnswerFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.focus();
    ref.current.selectionStart = ref.current.value.length;
    ref.current.selectionEnd = ref.current.value.length;
  }, []);

  function handleSumbit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSumbit}>
      <button className={styles.buttonPluse} type="button">
        <Icon name={EIcons.pluse} size={10} />
      </button>

      <textarea
        className={styles.input}
        defaultValue={`${userName}, `}
        ref={ref}
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
          <span className={styles.buttonText}>Отправить ответ</span>
          <span className={styles.buttonArrow}>
            <Icon name={EIcons.send} size={10} />
          </span>
        </button>
      </div>
    </form>
  );
}
