import classNames from 'classnames';
import React from 'react';
import styles from './break.css';

type TBreakSizes = 4 | 6 | 8 | 12 | 16 | 20;

interface IBreakProps {
  size: TBreakSizes;
  mobileSize?: TBreakSizes;
  tabletSize?: TBreakSizes;
  desktopSize?: TBreakSizes;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    { [styles.inline]: inline },
    { [styles.top]: top }
  );

  return <div className={classes} />;
}
