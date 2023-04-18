import React from 'react';
import styles from './grading.module.css';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

export function Grading() {
  const { i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <div className={styles.root}>
      <div className={styles.ratings}>8,7</div>
      <div className={styles.categoryList}>
        <p className={styles.categoryItem}>{t('Grading.Portal rating')}</p>
        <p className={styles.categoryItem}>Интересный сюжет</p>
        <p className={styles.categoryItem}>34 800 {t('Grading.ratings')}</p>
      </div>
      <button className={styles.btn}>{t('Grading.estimate')}</button>
    </div>
  );
}
