import React, { FC } from 'react';
import styles from './bannerhover.module.css';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { ReitingMovie } from 'shared/bisnes/ReitingMovie';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { TopChart } from 'shared/bisnes/TopChart';
import { SvgIcon } from 'shared/ui/SvgIcon';
import { IFilm } from 'shared/types/film';

interface IProps {
  film: IFilm;
}

export const BannerHover: FC<IProps> = ({ film }) => {
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
            <ReitingMovie grade={film.rating.kp} />
            <BlockChart obj={film.rating} width={35} />
          </div>
          <TopChart />
          <ShortDescription obj={film} />
        </div>
      </div>
    </div>
  );
};
