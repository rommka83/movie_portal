import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChangeTheLanguage } from 'features/ChangeTheLanguage';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>{t('navList.Home')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/MovieList'>{t('navList.MovieList')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/MoviePage'>{t('navList.MoviePage')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/ActorPage'>{t('navList.ActorPage')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/Authorization'>{t('navList.Authorization')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/MovieReviews'>{t('navList.MovieReviews')}</Link>
          </li>
          <li className={styles.item}>
            <Link to='/AdminPanel'>{t('navList.AdminPanel')}</Link>
          </li>
        </ul>
      </nav>
      <ChangeTheLanguage />
    </header>
  );
}
