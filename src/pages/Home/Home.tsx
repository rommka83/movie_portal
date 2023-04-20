import React from 'react';
import styles from './home.module.css';
import test from '../../temp/DB/test.json';
import testKinopoisk from '../../temp/DB/testKinopoisk.json';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { PromoSlider } from 'widgets/PromoSlider';

let [obj, obj2] = test.movies;

console.log(testKinopoisk);

let adventures = testKinopoisk.filter((el) =>
  el.genres.find((e) => e.name === 'приключения')
);

export function Home() {
  return (
    <>
      <PromoSlider movies={testKinopoisk} />
      <div className='container'>
        <CategoryFilms title={'Приключения'} movies={adventures} />
        {/* <CategoryFilms title={obj2.category} movies={arr2} /> */}
      </div>
    </>
  );
}
