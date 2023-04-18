import React, { FC } from 'react';
import styles from './genrebookmarks.module.css';
import { nanoid } from '@reduxjs/toolkit';

interface IProps {
  ganre: string[];
}

export const GenreBookmarks: FC<IProps> = ({ ganre }) => {
  return (
    <ul className={styles.list}>
      {ganre.map((el) => {
        return (
          <li className={styles.item} key={nanoid()}>
            <a href='https://www.ivi.ru/movies' className={styles.link}>
              {el}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
