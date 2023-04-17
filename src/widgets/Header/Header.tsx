import React from 'react';
import styles from './header.module.css';
import { ChangeTheLanguage } from 'features/ChangeTheLanguage';
import { HeaderNav } from 'features/HeaderNav';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <HeaderNav />
        <ChangeTheLanguage />
      </div>
    </header>
  );
}
