import React from 'react';
import styles from './header.module.css';
import { ChangeTheLanguage } from 'features/ChangeTheLanguage';
import { HeaderNav } from 'features/HeaderNav';
import classNames from 'classnames';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.wrapper)}>
        <HeaderNav />
        <ChangeTheLanguage />
      </div>
    </header>
  );
}
