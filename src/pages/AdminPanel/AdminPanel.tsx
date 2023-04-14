import React from 'react';
import styles from './adminpanel.module.css';
import { PosterCards } from 'shared/PosterCards/PosterCards';

export function AdminPanel() {
  return (
    <div>
      <PosterCards
        src='https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5ec7dbd7-1cab-4eae-8846-8be00c56dc0a/300x450'
        name='avatars'
      />
    </div>
  );
}
