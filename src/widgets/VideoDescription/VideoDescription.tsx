import React from 'react';
import styles from './videodescription.module.css';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import classNames from 'classnames';
import { ActorsList, IActor } from 'entities/ActorsList';
import { Grading } from 'features/Grading';

interface IProps {
  title: string;
  year: string;
  duration: string;
  ageRestrictions: number;
  ganre: string[];
  actors: IActor[];
  reiting: string;
  description: string;
}

export function VideoDescription({
  title,
  year,
  duration,
  ageRestrictions,
  ganre,
  actors,
  reiting,
  description,
}: IProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.atributes}>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {year}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {duration}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {ageRestrictions}+
          </a>
        </li>
      </ul>
      <div className={styles.ganre}>
        <GenreBookmarks ganre={ganre} />
      </div>
      <ul className={styles.quality}>
        <li className={styles.qualityVideo}>FullHD</li>
        <li
          className={classNames(
            styles.qualityAudio,
            'icon-player_volumeMidRegular_16__0'
          )}
        >
          Рус
        </li>
      </ul>
      <ActorsList actors={actors} reiting={reiting} />
      <p className={styles.description}>{description}</p>
      <Grading />
    </div>
  );
}
