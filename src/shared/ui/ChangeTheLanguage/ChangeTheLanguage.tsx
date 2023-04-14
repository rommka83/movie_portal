import React from 'react';
import styles from './changethelanguage.module.css';
import { useTranslation } from 'react-i18next';

export function ChangeTheLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={() => changeLanguage('ru')}>
        ru
      </button>
      <button className={styles.btn} onClick={() => changeLanguage('en')}>
        en
      </button>
    </div>
  );
}
