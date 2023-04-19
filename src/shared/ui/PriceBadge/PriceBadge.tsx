import React from "react";
import styles from "./priceBadge.module.css";
import cn from "classnames";


interface IProps {
	price: boolean
}


export const PriceBadge = ({ price }: IProps) => {


	return (
		<span className={cn(styles.priceBadge, price ? styles.pink : styles.gray)}>
			{price ? 'Подписка' : 'Бесплатно'}
		</span>
	);
}


