import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { IFilm, MovieBadge } from 'entities/MovieBadge';
import { nanoid } from '@reduxjs/toolkit';
import styles from './categoryfilms.module.css';
import { RightArrow } from 'shared/ui/RightArrow';
import { UseMedia } from 'shared/hooks/useMedia';

interface IProps {
  title: string;
  movies: IFilm[];
}

export const CategoryFilms: FC<IProps> = ({ title, movies }) => {
  const list = useRef<HTMLUListElement>(null);
  const [ofset, setOfset] = useState(0);
  const [widthList, setWidthList] = useState(0);
  const media1 = UseMedia('(max-width: 1450px)');
  const media2 = UseMedia('(max-width: 1050px)');
  const media3 = UseMedia('(max-width: 630px)');
  const media4 = UseMedia('(max-width: 400px)');

  const amountCards = useMemo(() => {
    if (media4) return 1;
    if (media3) return 2;
    if (media2) return 3;
    if (media1) return 5;
    return 7;
  }, [media1, media2, media3, media4]);

  const moveLeft = function () {
    setOfset((currentOfset) => {
      if (widthOfset === undefined) return currentOfset;
      const newOfset = currentOfset - widthOfset;
      return newOfset;
    });
  };

  const moveRight = function () {
    setOfset((currentOfset) => {
      if (widthOfset === undefined) return currentOfset;
      const newOfset = currentOfset + widthOfset;
      return newOfset;
    });
  };

  const cardWidth = useMemo(() => {
    if (list.current === null) return;
    const cardWidth = (widthList - 20 * (amountCards - 1)) / amountCards;
    return cardWidth;
  }, [amountCards, widthList]);

  const widthOfset = useMemo(() => {
    if (cardWidth === undefined) return;
    const widthOfset = cardWidth + 20;
    return widthOfset;
  }, [cardWidth]);

  useEffect(() => {
    setWidthList((current) => {
      if (list.current === null) return current;
      return list.current.offsetWidth;
    });
  }, [widthList]);

  return (
    <section className={styles.root}>
      <SectionTitle children={title} />
      <div className={styles.sliderWrapper}>
        <div className={styles.window}>
          <ul
            className={styles.list}
            ref={list}
            style={{ transform: `translateX(${ofset}px)` }}
          >
            {movies.map((obj) => {
              return (
                <li className={styles.item} key={nanoid()}>
                  <MovieBadge
                    width={cardWidth !== undefined ? cardWidth : 0}
                    name={obj.name}
                    img={obj.img}
                    price={obj.price}
                    ageRestrictions={obj.ageRestrictions}
                    year={obj.year}
                    country={obj.country}
                    duration={obj.duration}
                    reiting={{
                      grade: obj.reiting.grade,
                      spectacularity: obj.reiting.spectacularity,
                      actors: obj.reiting.actors,
                      plot: obj.reiting.plot,
                      directing: obj.reiting.directing,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.controlR} ${styles.control}  icon-arrowRight_8x20__0`}
        onClick={moveLeft}
      ></div>
      <div
        className={`${styles.controlL} ${styles.control}  icon-arrowLeft_8x20__0`}
        onClick={moveRight}
      ></div>
    </section>
  );
};
