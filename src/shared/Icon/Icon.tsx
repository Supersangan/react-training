import React from 'react';
import styles from './icon.css';
import {
  IconComments,
  IconHide,
  IconMenu,
  IconReport,
  IconSave,
  IconShare,
} from '../icons';
import classNames from 'classnames';
import { IconUnwrap } from '../icons/IconUnwrap';
import { IconCode } from '../icons/IconCode';
import { IconImage } from '../icons/IconImage';
import { IconDocument } from '../icons/IconDocument';
import { IconSend } from '../icons/IconSend';
import { IconEmoji } from '../icons/IconEmoji';
import { IconPluse } from '../icons/IconPluse';
import { IconPDF } from '../icons/IconPDF';
import { IconA } from '../icons/IconA';
import { IconAnswer } from '../icons/IconAnswer';
import { IconVoice } from '../icons/IconVoice';
import { IconDownload } from '../icons/IconDownload';
import { IconLink } from '../icons/IconLink';
import { IconPencil } from '../icons/IconPencil';
import { IconRefresh } from '../icons/IconRefresh';
import { IconUser } from '../icons/IconUser';

export enum EIcons {
  comments = 'comments',
  hide = 'hide',
  menu = 'menu',
  report = 'report',
  save = 'save',
  share = 'share',
  code = 'code',
  image = 'image',
  document = 'document',
  download = 'download',
  user = 'user',
  refresh = 'refresh',
  link = 'link',
  voice = 'voice',
  answer = 'answer',
  pencil = 'pencil',
  a = 'a',
  pdf = 'pdf',
  unwrap = 'unwrap',
  pluse = 'pluse',
  send = 'send',
  emoji = 'emoji',
}

const components = {
  comments: IconComments,
  hide: IconHide,
  menu: IconMenu,
  report: IconReport,
  save: IconSave,
  share: IconShare,
  code: IconCode,
  image: IconImage,
  document: IconDocument,
  download: IconDownload,
  user: IconUser,
  refresh: IconRefresh,
  link: IconLink,
  voice: IconVoice,
  answer: IconAnswer,
  pencil: IconPencil,
  a: IconA,
  pdf: IconPDF,
  unwrap: IconUnwrap,
  pluse: IconPluse,
  emoji: IconEmoji,
  send: IconSend,
};

type TSizes = 32 | 28 | 20 | 16 | 14 | 12 | 10;

interface IiconProps {
  name: EIcons;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
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
    styles.icon,
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
