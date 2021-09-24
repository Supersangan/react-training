import classNames from 'classnames';
import React from 'react';
import styles from './karmacounter.css';

export enum EDirection {
  row = 'Row',
  column = 'Column',
}

interface IKarmaCounterProps {
  score: number;
  direction?: EDirection;
  mobileDirection?: EDirection;
  tabletDirection?: EDirection;
  desktopDirection?: EDirection;
}

export function KarmaCounter(props: IKarmaCounterProps) {
  const {
    score,
    direction = 'row',
    mobileDirection,
    tabletDirection,
    desktopDirection,
  } = props;


  const classes = classNames(
    styles.root,
    styles[`s${direction}`],
    { [styles[`m${mobileDirection}`]]: mobileDirection },
    { [styles[`t${tabletDirection}`]]: tabletDirection },
    { [styles[`d${desktopDirection}`]]: desktopDirection }
  );

  return (
    <div className={classes}>
      <button className={styles.karmaUp}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>

      <span className={styles.karmaValue}>{score}</span>

      <button className={styles.karmaDown}>
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"
            fill="#C4C4C4"
          />
        </svg>
      </button>
    </div>
  );
}
