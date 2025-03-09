import type { IconType } from "react-icons";

export interface FooterLink {
	href: string;
	text: string;
}

interface SocialMediaLink {
	href: string;
	icon: IconType;
	title: string;
}

type BrandType = {
	href: string;
	src: string;
	alt: string;
	name: string;
};

type CopyrightType = {
	href: string;
	text: string;
	year: number;
};

export interface FooterConfig {
	brand: BrandType;
	links: FooterLink[];
	copyright: CopyrightType;
	socialMediaLinks: SocialMediaLink[];
}
