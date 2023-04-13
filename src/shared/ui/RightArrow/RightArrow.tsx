import React from 'react';
import styles from './rightarrow.module.css';

export function RightArrow() {
  return (
    <button className={styles.RightArrow}>
      <svg
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill='var(--white)'
      >
        <polygon points='160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' />
      </svg>
    </button>
  );
}
