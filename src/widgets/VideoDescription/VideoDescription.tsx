import React from 'react';
import styles from './videodescription.module.css';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import classNames from 'classnames';
import { ActorsList } from 'entities/ActorsList';
import { Grading } from 'features/Grading';
import { IFilm } from 'shared/types/IFilm';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes } from 'react';

interface IProps {
  film: IFilm;
}
type props = HTMLAttributes<HTMLDivElement> & IProps;

export function VideoDescription({ film, className }: props) {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const hours = Math.floor(film.movieLength / 60);
  const min = film.movieLength - hours;

  return (
    <div className={classNames(styles.root, className)}>
      <h2 className={styles.title}>
        {lng === 'ru' ? film.name : film.enName ? film.enName : film.name}
      </h2>
      <ul className={styles.atributes}>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {film.year}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {hours < 0
              ? film.movieLength + ' мин'
              : hours + ' ч ' + min + ' мин'}
          </a>
        </li>
        <li className={styles.atributesItem}>
          <a href='https://www.ivi.ru/series' className={styles.atributesLink}>
            {film.ageRating ? film.ageRating : 0} +
          </a>
        </li>
      </ul>
      <div className={styles.ganre}>
        <GenreBookmarks ganre={film.genres} />
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
      <ActorsList actors={film.persons} reiting={film.rating.kp} />
      <p className={styles.description}>{film.description}</p>
      <Grading grading={film.rating.kp} />
    </div>
  );
}
