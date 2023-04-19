import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import test from '../../../temp/DB/test.json';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IFilm } from 'entities/MovieBadge';
import styles from './desktop.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { useEffect, useMemo, useState } from 'react';
import { VideoDescription } from 'widgets/VideoDescription';
import { CategoryFilms } from 'widgets/CategoryFilms';

export function Desktop() {
  const { id } = useParams();

  const { i18n } = useTranslation();
  const lng = i18n.language;

  const film = useMemo(() => {
    return test.movies.find((el) => el.id === id);
  }, [id]);

  let similar = test.movies.filter((el) => el.id !== id);

  return film === undefined ? null : (
    <div className={styles.root}>
      <div className={styles.head}>
        <GenreBookmarks ganre={lng === 'ru' ? film.genre.ru : film.genre.en} />
      </div>
      <div className={styles.playerAndDescription}>
        <div className={styles.player}>
          <div className={styles.playerWrapper}>
            <VideoPlayer trailer={film.trailer} age={film.ageRestrictions} />
          </div>
        </div>
        <div className={styles.description}>
          <VideoDescription
            title={lng === 'ru' ? film.name.ru : film.name.en}
            year={film.year}
            duration={film.duration}
            ageRestrictions={film.ageRestrictions}
            ganre={lng === 'ru' ? film.genre.ru : film.genre.en}
            actors={film.actors}
            reiting={film.reiting.grade}
            description={film.description}
          />
        </div>
      </div>
      <div className={styles.simulyar}>
        <CategoryFilms
          title={`С фильмом "${
            lng === 'ru' ? film.name.ru : film.name.en
          }" смотрят:`}
          movies={similar}
        />
      </div>
      <div className={styles.ActorsCreators}>ActorsCreators</div>
      <div className={styles.AdditionalMaterials}>AdditionalMaterials</div>
      <div className={styles.comments}>comments</div>
      <div className={styles.allDvices}>allDvices</div>
    </div>
  );
}
