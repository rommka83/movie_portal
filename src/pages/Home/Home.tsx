import React from 'react';
import PromoSlider from 'widgets/PromoSlider';
import styles from './home.module.css';
import test from '../../temp/DB/test.json';
import { IFilm } from 'entities/MovieBadge';
import { CategoryFilms } from 'widgets/CategoryFilms';

let [obj, obj2] = test.movies;
let arr: IFilm[] = Array(20).fill(obj);
let arr2: IFilm[] = Array(20).fill(obj2);
let arr3: IFilm[] = Array(4).fill(test.movies);



export function Home() {
  return (
    <>
      <PromoSlider movies={test.movies} />
      <div className='container'>
        <CategoryFilms title={obj.category} movies={arr} />
        <CategoryFilms title={obj2.category} movies={arr2} />
      </div>
    </>

  );
}
