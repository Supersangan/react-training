import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../icons';
import { EColors, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  const client_id = process.env.CLIENT_ID;
  
  return (
    <a
      className={styles.root}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${client_id}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit`}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <IconAnon />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColors.black : EColors.gray99}>
          {username || 'Аноним'}
        </Text>
      </div>
    </a>
  );
}
