import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'>Главная</Link>
        </li>
        <li className={styles.item}>
          <Link to='/MovieList'>Список фильмов</Link>
        </li>
        <li className={styles.item}>
          <Link to='/MoviePage'>Страница фильма</Link>
        </li>
        <li className={styles.item}>
          <Link to='/ActorPage'>Страница актёра</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Authorization'>Авторизация</Link>
        </li>
        <li className={styles.item}>
          <Link to='/MovieReviews'>Отзывы на фильм</Link>
        </li>
        <li className={styles.item}>
          <Link to='/AdminPanel'>Админка</Link>
        </li>
      </ul>
    </nav>
  );
}
