import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../icons';
import { EColors, InlineText } from '../../../InlineText';
import styles from './userblock.css';

const HOMEPAGE = process.env.HOME;

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  const client_id = process.env.CLIENT_ID;

  return (
    <a
      className={styles.root}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${client_id}&response_type=code&state=random_string&redirect_uri=${HOMEPAGE}/auth&duration=permanent&scope=read identity submit`}
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
        {loading ? (
          <InlineText size={20} color={EColors.gray99}>
            Загрузка...
          </InlineText>
        ) : (
          <InlineText
            size={20}
            color={username ? EColors.black : EColors.gray99}
          >
            {username || 'Аноним'}
          </InlineText>
        )}
      </div>
    </a>
  );
}
