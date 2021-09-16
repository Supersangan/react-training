import React from 'react';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { Break } from '../../../../Break';
import { Text } from '../../../../Text';
import { GenericList } from '../../../../GenericList';
import { EIcons, Icon } from '../../../../Icon';
import {
  CommentsIcon,
  HideIcon,
  ReportIcon,
  SaveIcon,
  ShareIcon,
} from '../../../../icons';
import styles from './menulist.css';

export function MenuList() {
  return (
    <>
      <ul className={styles.root}>
        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#comments">
            <Icon name={EIcons.comments} size={16} />
            <Break size={6} inline></Break>
            <Text size={14} mobileSize={12}>Комментарии</Text>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#share">
            <Icon name={EIcons.share} size={16} />
            <Break size={6} inline></Break>
            <Text size={14} mobileSize={12}>Поделиться</Text>
          </a>
        </li>

        <li className={styles.itemWrapper}>
          <a className={styles.item} href="#hide">
            <Icon name={EIcons.hide} size={16} />
            <Break size={6} inline></Break>
            <Text size={14} mobileSize={12}>Скрыть</Text>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#save">
            <Icon name={EIcons.save} size={16} />
            <Break size={6} mobileSize={12} inline></Break>
            <Text size={14} mobileSize={12}>Сохранить</Text>
          </a>
        </li>

        <li className={styles.itemWrapper}>
          <a className={styles.item} href="#report">
            <Icon name={EIcons.report} size={16} />
            <Break size={6} inline></Break>
            <Text size={14} mobileSize={12}>Пожаловаться</Text>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMax}>
          <a className={styles.item + ' ' + styles.item_close} href="#close">
            <Text size={14}>Закрыть</Text>
          </a>
        </li>
      </ul>
    </>
  );
}
