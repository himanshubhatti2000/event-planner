import type { FooterConfig } from "@/@types/footer";
import { LINKS } from "@/constants";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";

export const FOOTER_CONFIG: FooterConfig = {
	brand: {
		href: "https://yourwebsite.com",
		src: "https://yourwebsite.com/images/logo.svg",
		alt: "Your Logo",
		name: "DreamDecor",
	},
	links: [
		{ href: LINKS.ABOUT_US.link, text: "About" },
		{ href: LINKS.PRIVACY_POLICY.link, text: "Privacy Policy" },
		{ href: LINKS.CONTACTS.link, text: "Contact" },
	],
	socialMediaLinks: [
		{
			href: "https://www.facebook.com/",
			icon: PiFacebookLogoFill,
			title: "facebook link",
		},
		{
			href: "https://www.instagram.com/dream.decor05/",
			icon: PiInstagramLogoFill,
			title: "instagram link",
		},
	],
	copyright: {
		href: "#",
		text: "DreamDecor",
		year: 2024,
	},
};
