import { MouseEvent, useState } from "react";
import styles from "./headermoviesfilter.module.css";
import { CardTitle } from "shared/ui/CardTitle/CardTitle";
import { useTranslation } from "react-i18next";
import { Link } from "shared/ui/Link/Link";
import classNames from "classnames";

const sideContent = [
	"New",
	"Collections",
	"IviRating",
	"Trailers",
	"WhatToSee",
	"MoviesInHD",
	"IvisChoice",
	"SubscriptionNews",
];

const ROW_CONTENT_HEIGHT = 28;

export function HeaderMoviesFilter() {
	const { t } = useTranslation();
	const [offset, setOffset] = useState(0);
	const currentIndex = offset / ROW_CONTENT_HEIGHT;
	const onMouseEnter = (event: MouseEvent<HTMLLIElement>) => {
		const index = event.currentTarget.dataset["index"] ?? 0;
		setOffset(+index * ROW_CONTENT_HEIGHT);
	};
	return (
		<div className={styles.filterContainer}>
			<div className={styles.wrapper}>
				<div className={styles.doubleColumn}>
					<CardTitle className={styles.title}>
						{t("headerMoviesFilter.Genres")}
					</CardTitle>
					<ul className={styles.filmLinkList}>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Arthouse")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Actions")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Western")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.WarFilms")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Detectives")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.ForTheWholeFamily")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.ForChildren")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Documentaries")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Drama")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Historical")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Catastrophes")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Comedy")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Criminal")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Melodrama")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Mystical")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.BasedOnComics")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Adventures")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Sport")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Thrillers")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Horror")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Fantastic")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Fantasy")}</Link>
						</li>
					</ul>
				</div>
				<div className={styles.singleColumn}>
					<CardTitle className={styles.title}>
						{t("headerMoviesFilter.Countries")}
					</CardTitle>
					<ul className={styles.singleColumnList}>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Russians")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Foreign")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.SovietCinema")}</Link>
						</li>
					</ul>

					<CardTitle className={styles.title}>
						{t("headerMoviesFilter.Years")}
					</CardTitle>
					<ul className={styles.singleColumnList}>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Movies2023")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Movies2022")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Movies2021")}</Link>
						</li>
						<li className={styles.filmListItem}>
							<Link to=''>{t("headerMoviesFilter.Movies2020")}</Link>
						</li>
					</ul>
				</div>
				<div className={styles.sideContent}>
					<div className={styles.sideContentWrapper}>
						<ul className={styles.singleColumnList}>
							{sideContent.map((content, index) => (
								<li
									data-index={index}
									key={content}
									className={classNames(styles.filmListItem, {
										[styles.active]: currentIndex === index,
									})}
									onMouseEnter={onMouseEnter}
								>
									<Link to=''> {t(`headerMoviesFilter.${content}`)}</Link>
								</li>
							))}
						</ul>
						<div className={styles.gutter}>
							<div
								className={styles.gutterStripe}
								style={{ transform: `translateY(${offset}px)` }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
