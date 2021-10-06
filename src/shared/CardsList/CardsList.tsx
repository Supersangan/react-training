import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/reducer';
import { Card } from './Card';
import styles from './cardslist.css';

export interface IPostData {
  id: number;
  authorName: string;
  created: number;
  link: string;
  previewSrc: string | null;
  score: number;
  title: string;
  authorAvatarSrc: string | null;
}

export function CardsList() {
  const token = useSelector<TRootState, string>((state) => state.token);
  const [posts, setPosts] = useState<IPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState('');

  useEffect(() => {
    if (!token) return;

    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const response = await axios.get(
          'https://oauth.reddit.com/best?limit=25',
          {
            headers: { Authorization: `bearer ${token}` },
          }
        );

        if (response.data.kind != 'Listing') return;

        const posts = response.data.data.children.map((post: any) => {
          return {
            id: post.data.id,
            authorName: post.data.author,
            created: post.data.created,
            link: post.data.permalink,
            previewSrc:
              post.data.preview !== undefined
                ? post.data.preview.images[0].source.url.replaceAll(
                    '&amp;',
                    '&'
                  )
                : null,
            score: post.data.score,
            title: post.data.title,
          };
        });

        setPosts(posts);
      } catch (error) {
        console.log(error);
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    load();
  }, [token]);

  return (
    <ul className={styles.cardsList}>
      {/* <Card
        key={-1}
        post={{
          id: 123,
          authorName: 'Дмитрий Гришин',
          created: 1632187407,
          link: '#123',
          previewSrc: null,
          score: 197,
          title: 'Реализация намеченных плановых заданий',
          authorAvatarSrc: null,
        }}
      /> */}
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>Нет ни одного поста</div>
      )}

      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}

      {loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}

      {errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
