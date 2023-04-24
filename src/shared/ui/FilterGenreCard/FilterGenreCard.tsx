import styles from './filtergenrecard.module.css';
import classNames from 'classnames';
interface IFilterGenreCard {
  caption: string;
  genre: string;
  className?: string;
  iconClassName?: string;
}
export function FilterGenreCard({
  caption,
  genre,
  className,
  iconClassName,
}: IFilterGenreCard) {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.containerInner, className)}>
        <div
          className={classNames(
            styles.icon,
            `icon-genre_${genre}_24__0`,
            iconClassName
          )}
        />
        <span className={styles.caption}>{caption}</span>
      </div>
    </div>
  );
}
