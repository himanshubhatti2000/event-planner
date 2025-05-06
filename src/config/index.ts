import { LINKS } from "@/constants";

export const heroData = {
	headline: "At Dream Decor, we turn events into unforgettable memories",
	subheadline: "Get ready for the awesome celebration.",
	image: "/hero-bg.webp",
	buttonLabel: LINKS.CONTACTS.title,
	buttonUrl: LINKS.CONTACTS.link,
	scrollAnchorId: "hero-section",
};

export const META_DATA = {
	TITLE: "Dream Decor",
	DESCRIPTION:
		"Transform your event with stunning balloon decorations, themed setups, floral arrangements, and more",
	URL: "https://event-planner-navy-iota.vercel.app/",
	IMG_URL: "https://event-planner-navy-iota.vercel.app/opengraph-image.jpg",
	TYPE: "website",
	CARD: "dream_decor",
	SUB_HEADLINE: "Dream Decor: Event Decoration",
} as const;
