import styles from "./headernav.module.css";
import Link from "shared/ui/Link";
import { useTranslation } from "react-i18next";
import { UseMedia } from "shared/hooks/useMedia";

export function HeaderNav() {
	const tablet = UseMedia("(max-width: 1253px)");
	const { t } = useTranslation();
	if (tablet) return null;
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='/'>{t("header.MyIvi")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='https://www.ivi.ru/new'>{t("header.WhatsNew")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='/MovieList'>{t("header.Movies")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='https://www.ivi.ru/series'>{t("header.Series")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='https://www.ivi.ru/animation'>{t("header.Cartoons")}</Link>
				</li>
				<li className={styles.item}>
					<Link to='https://www.ivi.ru/tvchannels'>
						{t("header.TvChannels")}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
