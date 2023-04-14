import React, { AnchorHTMLAttributes } from "react";
import styles from "./link.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Link = React.memo<LinkProps>(
	({ className, to, children, ...props }) => {
		return (
			<NavLink
				{...props}
				className={classNames(styles.link, className)}
				to={to}
			>
				{children}
			</NavLink>
		);
	}
);

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	to: string;
};
