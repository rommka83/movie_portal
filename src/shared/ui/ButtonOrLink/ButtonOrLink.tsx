import React, { ButtonHTMLAttributes } from "react";
import styles from "./buttonorlink.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const ButtonOrLink = React.memo<ButtonProps>(
	({
		className,
		variant = "primary",
		round,
		large,
		transparent,
		small,
		children,
		to,
		onClick,
		...props
	}) => {
		const classes = classNames(styles.button, className, {
			[styles.primary]: variant === "primary",
			[styles.secondary]: variant === "secondary",
			[styles.third]: variant === "third",
			[styles.round]: round,
			[styles.large]: large,
			[styles.transparent]: transparent,
			[styles.small]: small,
		});

		if (to != null) {
			return (
				<Link className={classes} to={to} onClick={onClick}>
					{children}
				</Link>
			);
		}
		return (
			<button {...props} className={classes} onClick={onClick}>
				{children}
			</button>
		);
	}
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary" | "third";
	large?: boolean;
	transparent?: boolean;
	small?: boolean;
	round?: boolean;
	to?: string;
	onClick?: () => void;
};
