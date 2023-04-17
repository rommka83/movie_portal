import React, { FC } from 'react';
import styles from './blockchart.module.css';

interface IProps {
  spectacularity: number;
  actors: number;
  plot: number;
  directing: number;
  width: number;
}

export const BlockChart: FC<IProps> = ({
  spectacularity = 50,
  actors = 50,
  plot = 50,
  directing = 50,
  width,
}) => {
  return (
    <div className={styles.root}>
      <input
        type='range'
        name='spectacularity'
        className={styles.inp}
        min='0'
        max='100'
        value={spectacularity}
        step='1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        name='actors'
        className={styles.inp}
        min='0'
        max='100'
        value={actors}
        step='1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        name='plot'
        className={styles.inp}
        min='0'
        max='100'
        value={plot}
        step='1'
        style={{ width: width }}
        readOnly
      />
      <input
        type='range'
        name='directing'
        className={styles.inp}
        min='0'
        max='100'
        value={directing}
        step='1'
        style={{ width: width }}
        readOnly
      />
    </div>
  );
};
