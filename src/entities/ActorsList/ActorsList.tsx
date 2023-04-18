import React from 'react';
import styles from './actorslist.module.css';
import classNames from 'classnames';

export interface IActor {
  id: string;
  name: string;
  foto: string;
  films: string[];
}
interface Iprops {
  actors: IActor[];
  reiting: string;
}

export function ActorsList({ actors, reiting }: Iprops) {
  return (
    <ul className={styles.list}>
      <li className={classNames(styles.item, styles.reiting)}>{reiting}</li>
      {actors.slice(0, 4).map((el) => {
        return (
          <li className={styles.item}>
            <a href={`/ActorPage/${el.id}/${el.name}`} className={styles.link}>
              <img src={el.foto} alt={el.name} className={styles.pic} />
              {el.name.split(' ').map((e) => {
                return <p className={styles.name}>{e}</p>;
              })}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
