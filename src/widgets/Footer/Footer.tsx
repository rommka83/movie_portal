import { UseMedia } from "shared/hooks/useMedia";
import { FooterDesktop } from "./FooterDesktop";
import { FooterMobile } from "./FooterMobile";

export const Footer = () => {
	const mobile = UseMedia("(max-width: 1159px)");
	if (mobile) {
		return <FooterMobile />;
	}
	return <FooterDesktop />;
};
