import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
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
  const [nextAfter, setNextAfter] = useState('');
  const [firstLoading, setFirstLoading] = useState(true);
  const [loadingsCount, setLoadingsCount] = useState(0);

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      if (!nextAfter && !firstLoading) return;

      setLoading(true);
      setErrorLoading('');

      try {
        const response = await axios.get('https://oauth.reddit.com/best/', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 2,
            after: nextAfter,
          },
        });

        if (response.data.kind != 'Listing') return;

        const posts = response.data.data.children.map((post: any) => {
          return {
            id: post.data.id,
            authorName: post.data.author,
            created: post.data.created,
            link: post.data.id,
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

        const after = response.data.data.after;

        setPosts((prevPosts) => prevPosts.concat(...posts));
        setNextAfter(after);

        setLoadingsCount(loadingsCount + 1);
        setFirstLoading(false);
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadingsCount < 3) {
          load();
        }
      },
      {
        rootMargin: '10px',
      }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [token, nextAfter, loadingsCount, firstLoading]);

  return (
    <>
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

        <div ref={bottomOfList} />

        {loading && <div style={{ textAlign: 'center' }}>Загрузка...</div>}

        {errorLoading && (
          <div role="alert" style={{ textAlign: 'center' }}>
            {errorLoading}
          </div>
        )}
      </ul>

      {loadingsCount === 3 && (
        <div className={styles.loadMore}>
          <button
            className={styles.loadMoreButton}
            onClick={() => setLoadingsCount(0)}
          >
            Загрузить еще...
          </button>
        </div>
      )}
    </>
  );
}
