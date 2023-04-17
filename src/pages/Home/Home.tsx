import React from 'react';
import styles from './home.module.css';
import test from '../../temp/DB/test.json';
import { IFilm } from 'entities/MovieBadge';
import { CategoryFilms } from 'widgets/CategoryFilms';

let [obj, obj2] = test.movies;
let arr: IFilm[] = Array(20).fill(obj);
let arr2: IFilm[] = Array(20).fill(obj2);

export function Home() {
  return (
    <div className='container'>
      <CategoryFilms title={obj.category} movies={arr} />
      <CategoryFilms title={obj2.category} movies={arr2} />
    </div>
  );
}
