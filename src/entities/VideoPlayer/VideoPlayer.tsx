import React from 'react';
import styles from './videoplayer.module.css';
import classNames from 'classnames';
import { t } from 'i18next';

interface IProps {
  trailer: string;
}

export function VideoPlayer({ trailer }: IProps) {
  return (
    <div className={styles.root}>
      <video className={styles.video} src={trailer} autoPlay controls></video>
      <ul className={styles.list}>
        <li
          className={classNames(
            styles.item,
            styles.treilerPlay,
            'icon-playOutline_20__0'
          )}
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
