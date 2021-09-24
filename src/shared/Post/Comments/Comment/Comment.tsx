import React from 'react';
import { EDirection, KarmaCounter } from './KarmaCounter';
import styles from './comment.css';
import { Header } from './Header';
import { EIcons, Icon } from '../../../Icon';
import { IconComments, IconReport, IconShare } from '../../../icons';

interface ICommentProps {
  children?: React.ReactNode;
}

export function Comment({ children }: ICommentProps) {
  return (
    <div className={styles.root}>
      <div className={styles.aside}>
        <div className={styles.asideKarmaCounter}>
          <KarmaCounter score={103} direction={EDirection.column} />
        </div>

        <span className={styles.indent}></span>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>

        <p className={styles.text}>
          Как уже неоднократно упомянуто, стремящиеся вытеснить традиционное
          производство, нанотехнологии подвергнуты целой серии независимых
          исследований. В своём стремлении повысить качество жизни, они
          забывают, что дальнейшее развитие различных форм деятельности выявляет
          срочную потребность направлений прогрессивного развития.
        </p>

        <div className={styles.controls}>
          <div className={styles.controlsKarmaCounter}>
            <KarmaCounter score={103} />
          </div>

          <button className={styles.answerButton}>
            <span className={styles.answerIcon}>
              <IconComments width="14px" />
            </span>
            Ответить
          </button>

          <div className={styles.actions}>
            <button className={styles.actionsButton}>
              <span className={styles.actionsIcon}>
                <span className={styles.actionsIconShare}>
                  <IconShare />
                </span>
              </span>
              <span className={styles.actionsLabel}>Поделиться</span>
            </button>

            <button className={styles.actionsButton}>
              <span className={styles.actionsIcon}>
                <span className={styles.actionsIconReport}>
                  <IconReport />
                </span>
              </span>
              <span className={styles.actionsLabel}>Пожаловаться</span>
            </button>
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
}
