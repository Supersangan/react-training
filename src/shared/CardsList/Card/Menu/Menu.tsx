import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { IconMenu } from '../../../icons/IconMenu';
import styles from './menu.css';
import { MenuList } from './MenuList';

export function Menu() {
  return (
    <div className={styles.root}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <span className={styles.menuIcon}>
              <IconMenu />
            </span>
          </button>
        }
      >
        <MenuList />
      </Dropdown>
    </div>
  );
}
