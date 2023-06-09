import { PropsWithChildren, useState, useCallback, useEffect } from "react";
import styles from "./headerdropdown.module.css";
import classNames from "classnames";

interface IHeaderDropdown {
	opened: boolean;
	onClose: () => void;
}
export function HeaderDropdown({
	children,
	opened,
	onClose,
}: PropsWithChildren<IHeaderDropdown>) {
	const [dropShow, setDropShow] = useState(opened);
	const onMouseEnter = useCallback(() => {
		setDropShow(true);
	}, []);
	const onMouseLeave = useCallback(() => {
		setTimeout(() => {
			setDropShow(false);
		}, 250);
	}, []);

	useEffect(() => {
		if (!opened && !dropShow) {
			onClose();
		}
	}, [opened, dropShow]);

	return (
		<div
			className={classNames(styles.headerDropdownBody, {
				[styles.show]: opened || dropShow,
			})}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</div>
	);
}
