import React from 'react';
import styles from './home.module.css';
import testKinopoisk from '../../temp/DB/testKinopoisk.json';
import { CategoryFilms } from 'widgets/CategoryFilms';
import { PromoSlider } from 'widgets/PromoSlider';

let adventures = testKinopoisk.filter((el) =>
  el.genres.find((e) => e.name === 'приключения')
);
let fantasy = testKinopoisk.filter((el) =>
  el.genres.find((e) => e.name === 'фэнтези')
);

export function Home() {
  return (
    <>
      <PromoSlider movies={testKinopoisk} />
      <div className='container'>
        <CategoryFilms title={'Приключения'} movies={adventures} />
        <CategoryFilms title={'Фэнтези'} movies={fantasy} />
      </div>
    </>
  );
}
