import { useParams } from 'react-router-dom';
import styles from './desktop.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { useMemo } from 'react';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import test from '../../../temp/DB/testKinopoisk.json';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { useTranslation } from 'react-i18next';

export function Desktop() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lng = i18n.language;

  const film = useMemo(() => {
    if (id === undefined) return;
    return test.find((el) => el.id === +id);
  }, [id]);

  return film === undefined ? null : (
    <div className={styles.root}>
      <GenreBookmarks ganre={film.genres} className={styles.head} />
      <div className={styles.playerAndDescription}>
        <VideoPlayer
          className={styles.player}
          trailer={
            film.videos !== undefined && film.videos.trailers.length > 0
              ? film.videos.trailers[0].url
              : '#'
          }
          age={film.ageRating ? film.ageRating : 0}
        />
        <VideoDescription film={film} className={styles.description} />
      </div>
      <div className={styles.simulyar}>
        {/* {film.similarMovies.length > 0 && (
          <CategoryFilms
            title={`С фильмом "${
              lng === 'ru' ? film.name : film.enName ? film.enName : film.name
            }" смотрят:`}
            movies={film.similarMovies}
          />
        )} */}
      </div>
      <ActorsCreators
        persons={film.persons}
        className={styles.ActorsCreators}
      />
      <div className={styles.AdditionalMaterials}>AdditionalMaterials</div>
      <div className={styles.comments}>comments</div>
      <div className={styles.allDvices}>allDvices</div>
    </div>
  );
}
