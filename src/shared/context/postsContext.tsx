import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

interface IPostContextData {
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

interface IPostsContextData {
  posts?: IPostContextData[];
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({children}: {children: React.ReactNode}) {
  const [data] = usePostsData();

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  );
}