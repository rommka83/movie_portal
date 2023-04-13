import React from 'react';
import { Outlet } from 'react-router';
import { Header } from 'widgets/Header';
import styles from './general.module.css';

export function General() {
  return (
    <div className={styles.general}>
      <Header />
      <Outlet />
    </div>
  );
}
