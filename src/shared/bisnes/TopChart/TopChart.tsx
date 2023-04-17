import React, { FC } from 'react';
import styles from './topchart.module.css';
import { number } from 'prop-types';
import { useTranslation } from 'react-i18next';

interface IProps {
  name?: 'spectacularity' | 'actors' | 'plot' | 'directing';
  value?: number;
}

export const TopChart: FC<IProps> = ({
  name = 'spectacularity',
  value = 50,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <p className={styles.name}>{t(`topChart.${name}`)}</p>
      <input
        type='range'
        className={styles.inp}
        min='0'
        max='100'
        value={value}
        step='1'
        style={{ width: 'width' }}
        id='topChart'
        readOnly
      />
    </div>
  );
};
