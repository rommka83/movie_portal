import React, { FC, HTMLAttributes } from 'react';
import styles from './blockcomments.module.css';
import classNames from 'classnames';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { t } from 'i18next';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import UserPhoto from 'shared/user/UserPhoto';
import OneComment from 'entities/OneComment';
import { IReviev } from 'shared/types/IReviev';
import { nanoid } from '@reduxjs/toolkit';
import GeneralDataOnCommentsForTheFilm from 'entities/GeneralDataOnCommentsForTheFilm';

interface IPriops {
  comments: IReviev;
}

export const BlockComments: FC<HTMLAttributes<HTMLDivElement> & IPriops> = ({
  className,
  comments,
}) => {
  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle
        children={
          <div className={styles.title}>
            <span>{t('sectionTitle.movie commentary')}</span>
            <div className='icon-arrowRight_6x16__0'></div>
          </div>
        }
      />
      <ButtonOrLink
        variant='third'
        large={false}
        children={<span className={styles.btnAddText}>Написать отзыв</span>}
        className={styles.commentAdd}
      />
      <div className={styles.blocCommentMain}>
        <ul className={styles.listComments}>
          {comments.docs.slice(0, 4).map((el) => {
            return (
              <li className={styles.ItemComments} key={nanoid()}>
                <OneComment comment={el} />
              </li>
            );
          })}
        </ul>
        <GeneralDataOnCommentsForTheFilm className={styles.right} />
      </div>
    </section>
  );
};
