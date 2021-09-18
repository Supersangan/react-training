import React, { useContext } from 'react';
import { userContext } from '../../context/userContext';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const { iconImage, name } = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImage} username={name} />
    </div>
  );
}