import React, { FC } from 'react';
import styles from './genrebookmarks.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { type } from 'os';
import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface IProps {
  home?: boolean;
  page?: string;
  ganre: { name: string }[];
}
export const GenreBookmarks: FC<HTMLAttributes<HTMLUListElement> & IProps> = ({
  ganre,
  className,
  home,
  page,
}) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {home && (
        <li className={styles.item} key={nanoid()}>
          <Link to='/' className={styles.link}>
            мой иви
          </Link>
        </li>
      )}
      {ganre.map((el) => {
        return (
          <li className={styles.item} key={nanoid()}>
            <a href='https://www.ivi.ru/movies' className={styles.link}>
              {el.name}
            </a>
          </li>
        );
      })}
      {page && (
        <li className={styles.item} key={nanoid()}>
          <span className={styles.link}>{page}</span>
        </li>
      )}
    </ul>
  );
};
