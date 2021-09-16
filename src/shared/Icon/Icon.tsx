import React from 'react';
import styles from './icon.css';
import { CommentsIcon, HideIcon, MenuIcon, ReportIcon, SaveIcon, ShareIcon } from '../icons';
import classNames from 'classnames';

export enum EIcons {
  comments = 'comments',    
  hide = 'hide',  
  menu = 'menu',  
  report = 'report',  
  save = 'save',  
  share = 'share',   
}


const components = {
  comments: CommentsIcon,    
  hide: HideIcon,  
  menu: MenuIcon,  
  report: ReportIcon,  
  save: SaveIcon,  
  share: ShareIcon,    
};

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface IiconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
}

export function Icon(props: IiconProps) {
  const {
    name = EIcons.share,
    size = 16,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const IconComponent = components[name];

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return (
    <span className={classes}>
      <IconComponent />
    </span>
  );
}
