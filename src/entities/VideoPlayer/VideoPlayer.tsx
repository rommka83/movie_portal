import React from 'react';
import styles from './videoplayer.module.css';

interface IProps {
  trailer: string;
}

export function VideoPlayer({ trailer }: IProps) {
  return (
    <video className={styles.video} src={trailer} autoPlay controls></video>
  );
}
