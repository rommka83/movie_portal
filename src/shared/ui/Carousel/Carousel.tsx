import {
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import styles from './carousel.module.css';
import classNames from 'classnames';

interface ICarousel {
  title?: string | null;
  className?: string;
  scrollMultipleItems?: boolean;

  withButton?: boolean;
}

const LAST_ITEM_COUNT = 1;
const CORRECT_COEFFICIENT = 5;
export function Carousel({
  title,
  className,
  scrollMultipleItems,
  withButton,
  children,
}: PropsWithChildren<ICarousel>) {
  const carouselContentRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const contentWidthRef = useRef(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const onNextCLick = () => {
    carouselContentRef.current?.scrollBy({
      left: offsetRef.current,
      behavior: 'smooth',
    });
  };
  const onPrevCLick = () => {
    carouselContentRef.current?.scrollBy({
      left: -offsetRef.current,
      behavior: 'smooth',
    });
  };

  const onContentScroll = (event: MouseEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const scrollWidth =
      event.currentTarget.scrollWidth - contentWidthRef.current;

    if (scrollLeft > 0) {
      setShowPrevButton(true);
    } else {
      setShowPrevButton(false);
    }
    if (scrollLeft + CORRECT_COEFFICIENT > scrollWidth) {
      setShowNextButton(false);
    } else {
      setShowNextButton(true);
    }
  };

  useEffect(() => {
    const carouselContent = carouselContentRef.current;
    let carouselContentWidth = 0;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.borderBoxSize) {
          carouselContentWidth = entry.borderBoxSize[0].inlineSize;
          contentWidthRef.current = carouselContentWidth;
          const carouselItemWidth =
            entry.target.children[0].getBoundingClientRect().width;
          const visibleItemsCount = Math.floor(
            carouselContentWidth / carouselItemWidth
          );
          const scrollItemsCount = scrollMultipleItems
            ? visibleItemsCount - LAST_ITEM_COUNT
            : 1;
          const currentOffset = carouselItemWidth * scrollItemsCount;
          offsetRef.current = currentOffset;
        }
      }
    });
    if (carouselContent) {
      resizeObserver.observe(carouselContent);
    }

    return () => {
      carouselContent && resizeObserver.unobserve(carouselContent);
    };
  }, [carouselContentRef, offsetRef, scrollMultipleItems]);

  return (
    <div className={styles.carouselContainer}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.wrapper}>
        {withButton && showPrevButton && (
          <button
            className={classNames(styles.prevButton, 'icon-arrowLeft_8x20__0')}
            onClick={onPrevCLick}
          />
        )}
        <div
          ref={carouselContentRef}
          onScroll={onContentScroll}
          className={classNames(styles.carouselContent, className)}
        >
          {children}
        </div>
        {withButton && showNextButton && (
          <button
            className={classNames(styles.nextButton, 'icon-arrowRight_8x20__0')}
            onClick={onNextCLick}
          />
        )}
      </div>
    </div>
  );
}
