import React from 'react';
import styles from './videoplayer.module.css';
import classNames from 'classnames';
import { t } from 'i18next';
import { useAppDispatch } from 'app/store/hooks';
import { changeTrailerPlayer } from 'app/store/trailerPlayerSlice';
import { HTMLAttributes } from 'react';

interface IProps {
  trailer: string;
  age: number;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export function VideoPlayer({ trailer, age, className }: props) {
  const dispatch = useAppDispatch();

  return (
    <div className={classNames(styles.root, className)}>
      <video className={styles.video} src={trailer} autoPlay controls></video>
      <ul className={styles.list}>
        <li
          className={classNames(
            styles.item,
            styles.treilerPlay,
            'icon-playOutline_20__0'
          )}
          onClick={() => {
            dispatch(
              changeTrailerPlayer({
                isOpen: true,
                age: age,
                trailer: trailer,
              })
            );
          }}
        >
          <span> {t('Player.trailer')}</span>
        </li>
        <li
          className={classNames(
            styles.item,
            styles.bookmark,
            'icon-favoriteAdd_20__0'
          )}
        ></li>
        <li
          className={classNames(
            styles.item,
            styles.download,
            'icon-share_20__0'
          )}
        ></li>
      </ul>
    </div>
  );
}
