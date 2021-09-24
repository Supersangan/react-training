import React from 'react';
import { SaveButton } from './SaveButton';
import styles from './actions.css';


export function Actions() {
  return (
    <div className={styles.actions}>
      <SaveButton />
      
      <SaveButton />    
    </div>
  );
}
