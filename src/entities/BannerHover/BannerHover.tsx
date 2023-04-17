import React, { FC } from 'react';
import styles from './bannerhover.module.css';
import { BlockChart } from 'shared/BlockChart';
import { ReitingMovie } from 'shared/ReitingMovie';
import { ShortDescription } from 'shared/ShortDescription';
import { TopChart } from 'shared/TopChart';
import { SvgIcon } from 'shared/ui/SvgIcon';

interface IProps {
  grade: string;
  spectacularity: number;
  actors: number;
  plot: number;
  directing: number;
  year: string;
  country: string;
  genre: string;
  duration: string;
}

export const BannerHover: FC<IProps> = ({
  grade,
  spectacularity,
  actors,
  plot,
  directing,
  year,
  country,
  genre,
  duration,
}) => {
  return (
    <div className={styles.bannerHover}>
      <div className={styles.bannerHoverWrapper}>
        <ul className={styles.bannerHoverList}>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Bookmark' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Magic' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='Star' size={25} />
          </li>
          <li className={styles.bannerHoverItem}>
            <SvgIcon type='DashCircle' size={25} />
          </li>
        </ul>
        <div className={styles.bannerHoverReiting}>
          <div className={styles.bannerReiting}>
            <ReitingMovie grade={grade} />
            <BlockChart
              spectacularity={spectacularity}
              actors={actors}
              plot={plot}
              directing={directing}
              width={35}
            />
          </div>
          <TopChart />
          <ShortDescription
            year={year}
            country={country}
            genre={genre}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
};
