import React from 'react';
import { Break } from '../../../../Break';
import { InlineText } from '../../../../InlineText';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menulist.css';

export function MenuList() {
  return (
    <>
      <ul className={styles.root}>
        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#comments">
            <Icon name={EIcons.comments} size={16} />
            <Break size={6} inline></Break>
            <InlineText size={14} mobileSize={12}>Комментарии</InlineText>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#share">
            <Icon name={EIcons.share} size={16} />
            <Break size={6} inline></Break>
            <InlineText size={14} mobileSize={12}>Поделиться</InlineText>
          </a>
        </li>

        <li className={styles.itemWrapper}>
          <a className={styles.item} href="#hide">
            <Icon name={EIcons.hide} size={16} />
            <Break size={6} inline></Break>
            <InlineText size={14} mobileSize={12}>Скрыть</InlineText>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMin}>
          <a className={styles.item} href="#save">
            <Icon name={EIcons.save} size={16} />
            <Break size={6} mobileSize={12} inline></Break>
            <InlineText size={14} mobileSize={12}>Сохранить</InlineText>
          </a>
        </li>

        <li className={styles.itemWrapper}>
          <a className={styles.item} href="#report">
            <Icon name={EIcons.report} size={16} />
            <Break size={6} inline></Break>
            <InlineText size={14} mobileSize={12}>Пожаловаться</InlineText>
          </a>
        </li>

        <li className={styles.itemWrapper + ' ' + styles.itemWrapper_tabletMax}>
          <a className={styles.item + ' ' + styles.item_close} href="#close">
            <InlineText size={14}>Закрыть</InlineText>
          </a>
        </li>
      </ul>
    </>
  );
}
