import React from 'react';
import styles from './actorscreatorsmodal.module.css';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { Back } from 'shared/ui/Back/Back';
import { openClose } from 'app/store/ActorsCreatorsModalSlice';
import classNames from 'classnames';
import { useEffect } from 'react';
import { getFilm } from 'app/store/movieRequest';

export function ActorsCreatorsModal() {
  const isOpen = useAppSelector(
    (store) => store.ActorsCreatorsModal.data.isOpen
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilm());
  }, [dispatch]);

  return isOpen ? (
    <div className={styles.root}>
      <Back
        children={'Назад'}
        className={styles.back}
        f={() => dispatch(openClose())}
      />
      <div className={styles.wrapper}>
        <h2>jhgjhgjhgjhg</h2>
      </div>
    </div>
  ) : null;
}
