import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
}

interface IMyListProps {
  list: IItem[];
}

export function MyList({ list }: IMyListProps) {
  return (
    <ul>
      {list.map((item: IItem, index: number) => (
        <li onClick={() => item.onClick(item.id)} key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}