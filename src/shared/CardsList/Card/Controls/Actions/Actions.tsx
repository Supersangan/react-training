import React from 'react';
import styles from './actions.less';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Actions() {
  return (
    <div className={styles.actions}>
      <ShareButton />
      
      <SaveButton />    
    </div>
  );
}
