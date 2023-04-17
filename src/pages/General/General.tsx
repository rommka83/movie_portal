import { Outlet } from "react-router";
import { Header } from "widgets/Header";
import styles from "./general.module.css";
import { Footer } from "widgets/Footer";

export function General() {
	return (
		<div className={styles.general}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
