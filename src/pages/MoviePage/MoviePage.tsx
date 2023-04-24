import React, { useEffect } from 'react';
import styles from './moviepage.module.css';
import { Desktop } from './desktop/Desktop';

export function MoviePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <Desktop />
    </div>
  );
}
