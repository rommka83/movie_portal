import React from 'react';
import styles from './rightarrow.module.css';

interface IProps {
  size: 'big' | 'small';
  color?: 'white' | 'black';
  onClick?: () => void;
}

export function RightArrow({ size = 'big', color = 'white', onClick }: IProps) {
  return (
    <button
      className={`${styles.RightArrow} ${
        size === 'big' ? styles.big : styles.small
      }`}
      onClick={onClick}
    >
      <svg
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        // fill='var(--white)'
        fill={
          color === 'white' ? 'var(--white)' : 'var(--main-background-color)'
        }
      >
        <polygon points='160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 ' />
      </svg>
    </button>
  );
}
