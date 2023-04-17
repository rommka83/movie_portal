import React from "react";
import styles from "./priceBadge.module.css";
import cn from "classnames";


interface IProps {
	color: 'pink' | 'gray';
	children: React.ReactNode
}


export const PriceBadge = ({ color, children }: IProps) => {
	const mainCn = cn(
		styles.priceBadge,
		styles[color]
	)

	return (
		<span className={mainCn}>{children}</span>
	);
}


