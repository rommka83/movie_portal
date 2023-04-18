import React from 'react';
import styles from './home.module.css';
import test from '../../temp/DB/test.json';
import { IFilm } from 'entities/MovieBadge';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { addFilters } from 'app/store/filterSlice';
import { current } from '@reduxjs/toolkit';

let [obj, obj2] = test.movies;
let arr: IFilm[] = Array(20).fill(obj);
let arr2: IFilm[] = Array(20).fill(obj2);
let arr3: IFilm[] = Array(4).fill(test.movies);



export function Home() {
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  return (
    <div className='container'>
      <button
        onClick={() => {
          dispatch(addFilters({ ...filters, countries: 'Узбекистан' }));
        }}
      >
        Изменить фильтры
      </button>
      <CategoryFilms title={obj.category} movies={arr} />
      <CategoryFilms title={obj2.category} movies={arr2} />
    </div>
  );
}
