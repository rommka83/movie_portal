import React from 'react';
import styles from './agerestrictions.module.css';

interface IProps {
  age?: number;
}

export const AgeRestrictions = React.memo<IProps>(({ age }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>{age ? age : 0} +</span>
    </div>
  );
});
