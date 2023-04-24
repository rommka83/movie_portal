import React, { FC, HTMLAttributes } from 'react';
import styles from './generaldataoncommentsforthefilm.module.css';
import classNames from 'classnames';

export const GeneralDataOnCommentsForTheFilm: FC<
  HTMLAttributes<HTMLUListElement>
> = ({ className }) => {
  return (
    <ul className={classNames(className, styles.list)}>
      <li className={styles.item}>
        <p className={classNames(styles.total, styles.bigNumber)}>475</p>
        <p className={styles.type}>всего</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.positive, styles.bigNumber)}>
          422
        </span>
        <span className={styles.procent}> 88,84%</span>
        <p className={styles.type}>Положительные</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.negative, styles.bigNumber)}>
          24
        </span>
        <span className={styles.procent}> 5,05%</span>
        <p className={styles.type}>Отрицательные</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.neutral, styles.bigNumber)}>29</span>
        <span className={styles.procent}> 6,11%</span>
        <p className={styles.type}>Нейтральные</p>
      </li>
    </ul>
  );
};
