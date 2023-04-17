import React from 'react';
import styles from './postercards.module.css';

interface IProps {
  src: string;
  name: string;
}

export const PosterCards = React.memo<IProps>(({ src, name }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={name} className={styles.pic} />
    </div>
  );
});
//'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/300x450'
