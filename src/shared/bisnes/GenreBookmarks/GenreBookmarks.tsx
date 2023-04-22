import React, { FC } from 'react';
import styles from './genrebookmarks.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { type } from 'os';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface IProps {
  ganre: { name: string }[];
}
export const GenreBookmarks: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({
  ganre,
  className,
}) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {ganre.map((el) => {
        return (
          <li className={styles.item} key={nanoid()}>
            <a href='https://www.ivi.ru/movies' className={styles.link}>
              {el.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
