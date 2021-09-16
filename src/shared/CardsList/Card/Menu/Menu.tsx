import React from 'react';
import { Break } from '../../../Break';
import { Dropdown } from '../../../Dropdown';
import { EIcons, Icon } from '../../../Icon';
import { MenuIcon } from '../../../icons/MenuIcon';
import styles from './menu.css';
import { MenuList } from './MenuList';
import { Text } from '../../../Text';

export function Menu() {
  return (
    <div className={styles.root}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <span className={styles.menuIcon}>
              <MenuIcon />
            </span>
          </button>
        }
      >
        <MenuList />
      </Dropdown>
    </div>
  );
}
