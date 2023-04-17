import React, { FC } from 'react';
import styles from './shortdescription.module.css';

interface IProps {
  year: string;
  country: string;
  genre: string;
  duration: string;
}

export const ShortDescription: FC<IProps> = ({
  year,
  country,
  genre,
  duration,
}) => {
  return (
    <div className={styles.root}>
      <p className={styles.yearСountry}>
        {year}, {country}
      </p>
      <p className={styles.genre}>{genre}</p>
      <p className={styles.duration}>{duration}</p>
    </div>
  );
};
