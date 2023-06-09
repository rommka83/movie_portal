import React, { useEffect, useState } from 'react';

import styles from './actorpage.module.css';

import { useNavigate, useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';

import { IActorFilms } from 'shared/types/IActorFilms';

import { ActorTabs } from 'features/ActorTabs/ActorTabs';
import { PersonHeader } from 'shared/bisnes/PersonHeader';
import { FilmographyItem } from 'entities/FilmographyItem';
import Back from 'shared/ui/Back';

import { declension } from './lib/helpers/declension ';

import { fetchActor } from 'app/store/ActorReducers/ActionCreators';

export function ActorPage() {
  const [movies, setMovies] = useState<IActorFilms[]>([])
  const [moreMovies, setMoreMovies] = useState<IActorFilms[]>()
  const [showMoreMovies, setShowMoreMovies] = useState<boolean>(false)

  const { actor, isLoading, error } = useAppSelector(state => state.actorReduser)

  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchActor(id))
  }, [])

  useEffect(() => {
    if (actor.movies) {
      let movies = actor.movies.filter(item => item.name !== null)
      if (movies.length > 9) {
        let moviesWithTitle = movies.slice(0, 8)
        let moreMoviesWithTitle = movies.slice(8)
        setMovies(moviesWithTitle)
        setMoreMovies(moreMoviesWithTitle)
      } else {
        setMovies(actor.movies)
      }
    }
  }, [actor])



  if (error) {
    return (
      <div className={styles.error}>
        Не удалось получить пользователя
      </div>
    )
  }


  return (
    <section className={styles.actorPage}>
      <div className='container'>
        <div onClick={() => navigate(-1)} className={styles.back}>
          <Back>Назад</Back>
        </div>
        <div className={styles.container}>
          {
            !isLoading
              ? <>
                <PersonHeader
                  name={actor.name}
                  photo={actor.photo}
                  enName={actor.enName}
                />
                <div className={styles.filmography}>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      Полная фильмография
                      <span className={styles.lable}>
                        {declension(actor?.movies && actor?.movies.filter(item => item.name !== null).length, "фильм")}
                      </span>
                    </div>
                    <ActorTabs tabs={['Всё']} />
                  </div>
                  <div className={styles.filmographyList}>
                    <div className={styles.filmographyContent}>
                      {movies.map(movie => (movie.name &&
                        <FilmographyItem
                          key={movie.id}
                          movie={movie}
                        />
                      ))}
                      {!showMoreMovies && moreMovies &&
                        <button
                          className={styles.btn}
                          onClick={() => setShowMoreMovies(true)}>
                          Еще {declension(moreMovies.length, "фильм")}
                        </button>}
                      {showMoreMovies && moreMovies?.map(movie => (movie.name &&
                        <FilmographyItem
                          key={movie.id}
                          movie={movie}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </>
              : <div>Загрузка</div>
          }
        </div>
      </div>
    </section>
  )
}
