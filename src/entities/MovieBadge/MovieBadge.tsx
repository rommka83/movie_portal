import React from 'react';
import styles from './moviebadge.module.css';
import { PosterCards } from 'shared/PosterCards/PosterCards';
import { AgeRestrictions } from 'shared/AgeRestrictions';
import { CardTitle } from 'shared/ui/CardTitle/CardTitle';
import { BannerHover } from 'entities/BannerHover';
import { PriceBadge } from 'shared/ui/PriceBadge/PriceBadge';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export interface IFilm {
  width: number;
  name: { ru: string; en: string };
  img: string;
  category?: string;
  price: boolean;
  ageRestrictions: number;
  year: string;
  country: string;
  genre?: { ru: string[]; en: string[] };
  duration: string;
  actors?: { name: string; films: string[] }[];
  trailer?: string;
  description?: string;
  comments?: string;
  reiting: {
    grade: string;
    spectacularity: number;
    actors: number;
    plot: number;
    directing: number;
  };
}

export function MovieBadge({
  width,
  name,
  img,
  ageRestrictions,
  price,
  year,
  country,
  duration,
  reiting,
}: IFilm) {
  const { i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <article className={styles.wrapper} style={{ width: `${width}px` }}>
      <div className={styles.banner}>
        <div className={styles.bannerMain}>
          <div className={styles.pic}>
            <PosterCards src={img} name={lng === 'ru' ? name.ru : name.en} />
          </div>
          <div className={styles.age}>
            <AgeRestrictions age={ageRestrictions} />
          </div>
        </div>
        <div className={styles.bannerHover}>
          <BannerHover
            grade={reiting.grade}
            spectacularity={reiting.spectacularity}
            actors={reiting.actors}
            plot={reiting.plot}
            directing={reiting.directing}
            year={year}
            country={country}
            duration={duration}
            genre={''}
          />
        </div>
      </div>
      <div className={styles.title}>
        <CardTitle children={lng === 'ru' ? name.ru : name.en} />
      </div>
      <div className={styles.statusPrice}>
        <PriceBadge color={'pink'} children={'price'} />
      </div>
    </article>
  );
}
