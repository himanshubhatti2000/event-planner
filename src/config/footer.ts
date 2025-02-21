import type { FooterConfig } from "@/@types/footer";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiInstagramLogoFill } from "react-icons/pi";

export const FOOTER_CONFIG: FooterConfig = {
	brand: {
		href: "https://yourwebsite.com",
		src: "https://yourwebsite.com/images/logo.svg",
		alt: "Your Logo",
		name: "YourBrand",
	},
	links: [
		{ href: "#", text: "About" },
		{ href: "#", text: "Privacy Policy" },
		{ href: "#", text: "Licensing" },
		{ href: "#", text: "Contact" },
	],
	socialMediaLinks: [
		{ href: "#", icon: PiFacebookLogoFill, title: "facebook link" },
		{ href: "#", icon: PiInstagramLogoFill, title: "instagram link" },
	],
	copyright: {
		href: "#",
		text: "YourBrand™",
		year: 2024,
	},
};
