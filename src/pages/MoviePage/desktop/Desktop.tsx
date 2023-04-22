import { useParams } from 'react-router-dom';
import styles from './desktop.module.css';
import { VideoPlayer } from 'entities/VideoPlayer';
import { useEffect, useMemo } from 'react';
import { VideoDescription } from 'widgets/VideoDescription';
import { ActorsCreators } from 'widgets/ActorsCreators';
import test from '../../../temp/DB/testKinopoisk.json';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import { CategoryFilms } from 'widgets/CategoryFilms';
import AdditionalMaterials from 'entities/AdditionalMaterials';
import { useAppDispatch } from 'app/store/hooks';
import { getFilm } from 'app/store/movieRequest';

export function Desktop() {
  const { id } = useParams();
  const dispath = useAppDispatch();

  const film = useMemo(() => {
    if (id === undefined) return;
    return test.find((el) => el.id === +id);
  }, [id]);

  useEffect(() => {
    // dispath(getFilm());
  }, [dispath]);

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
      {film.similarMovies.length > 0 && (
        <CategoryFilms
          title={`С фильмом ${film.name} смотрят:`}
          simulyrMovie={film.similarMovies}
          className={styles.simulyar}
        />
      )}
      <ActorsCreators
        persons={film.persons}
        className={styles.ActorsCreators}
      />
      <AdditionalMaterials className={styles.AdditionalMaterials} />
      <div className={styles.comments}>comments</div>
      <div className={styles.allDvices}>allDvices</div>
    </div>
  );
}
