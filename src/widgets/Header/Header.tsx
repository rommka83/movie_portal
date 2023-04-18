import styles from "./header.module.css";
import { ChangeTheLanguage } from "features/ChangeTheLanguage";
import { HeaderNav } from "features/HeaderNav";
import { Logo } from "shared/ui/Logo/Logo";
import { ButtonOrLink } from "shared/ui/ButtonOrLink/ButtonOrLink";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export function Header() {
	const { t } = useTranslation();
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.logo}>
							<Logo className={styles.logoImg} />
						</div>
						<HeaderNav />
					</div>

					<div className={styles.wideArea}>
						<div className={styles.wideAreaInner}>
							<ButtonOrLink className={styles.wideAreaButton}>
								{t("header.Watch30DaysForFree")}
							</ButtonOrLink>
							<ChangeTheLanguage />
							<ButtonOrLink
								className={styles.avatarButton}
								variant='secondary'
								round
								small
								transparent
							>
								<span
									className={classNames("icon-avatar_20__0", styles.adminIcon)}
								/>
							</ButtonOrLink>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
