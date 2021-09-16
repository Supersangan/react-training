import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: React.ReactNode;
  onClick?: (id: string) => void;
  itemWrapperClassName?: string;
  itemClassName?: string;
  СhildAs?: 'a' | 'button' | 'div' | 'span';
  href?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}

interface IGenericListProps {
  list: IItem[];
  className?: string;
}

const noop = () => {};

export function GenericList({ list, className }: IGenericListProps) {
  return (
    <ul className={className}>
      {list.map(
        ({
          СhildAs,
          text,
          onClick = noop,
          itemWrapperClassName,
          itemClassName,
          id,
          href,
          icon,
          iconClassName
        }) => {
          return (
            <li key={id} className={itemWrapperClassName}>
              {СhildAs && (
                <СhildAs
                  className={itemClassName}
                  onClick={() => onClick(id)}
                  href={href}
                >
                  {icon && (
                    <span className={iconClassName}>
                      {icon}
                    </span>
                  )}
                  {text}
                </СhildAs>
              )}

              {!СhildAs && <>{text}</>}
            </li>
          );
        }
      )}
    </ul>
  );
}
