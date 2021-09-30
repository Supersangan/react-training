import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from '../store/reducer';

interface IPostData {
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

interface IPostsData {
  posts?: IPostData[];
}

export function usePostsData() {
  const [data, setData] = useState<IPostsData>({});
  const token = useSelector<TRootState, string>((state) => state.token);

  useEffect(() => {
    if (token === 'undefined') return;

    axios
      .get('https://oauth.reddit.com/best?limit=10', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        if (resp.data.kind != 'Listing') return;

        const posts = resp.data.data.children.map((post: any) => {
          return <IPostData>{
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

        Promise.all(
          posts.map((post: IPostData, i: number) => {
            return axios
              .get(`https://oauth.reddit.com/user/${post.authorName}/about`, {
                headers: { Authorization: `bearer ${token}` },
              })
              .then((resp) => {
                posts[i].authorAvatarSrc =
                  resp.data.data.snoovatar_img !== ''
                    ? resp.data.data.snoovatar_img
                    : null;
              })
              .catch(console.log);
          })
        )
          .then(() => {
            setData({ posts: posts });
          })
          .catch(console.log);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
