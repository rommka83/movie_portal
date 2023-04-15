import React from 'react';
import styles from './moviebadge.module.css';
import { PosterCards } from 'shared/PosterCards/PosterCards';
import { AgeRestrictions } from 'shared/AgeRestrictions';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';

export function MovieBadge() {
  return (
    <article className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.pic}>
          <PosterCards
            src='https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/300x450'
            name='get-kinopoisk-image'
          />
        </div>
        <div className={styles.age}>
          <AgeRestrictions age={16} />
        </div>
      </div>
      <div className={styles.title}>
        <CardTitle children='Название фильма' />
      </div>
      <div className={styles.statusPrice}>Бесплатно</div>
    </article>
  );
}
