import styles from "./headernav.module.css";
import Link from "shared/ui/Link";
import { useTranslation } from "react-i18next";

export function HeaderNav() {
	const { t } = useTranslation();
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='/'>{t("navList.Home")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/MovieList'>{t("navList.MovieList")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/MoviePage'>{t("navList.MoviePage")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/ActorPage'>{t("navList.ActorPage")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/Authorization'>{t("navList.Authorization")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/MovieReviews'>{t("navList.MovieReviews")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/AdminPanel'>{t("navList.AdminPanel")}</Link>
				</li>
			</ul>
		</nav>
	);
}
