import React from 'react';
import styles from './adminpanel.module.css';
import { PosterCards } from 'shared/PosterCards/PosterCards';
import { MovieBadge } from 'entities/MovieBadge';

export function AdminPanel() {
  return (
    <div style={{ display: 'flex' }}>
      <MovieBadge />
      <MovieBadge />
      <MovieBadge />
      <MovieBadge />
      <MovieBadge />
      <MovieBadge />
      <MovieBadge />
    </div>
  );
}
