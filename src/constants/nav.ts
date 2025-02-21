import { SECTION_CONSTANTS } from "./common";

const getLink = (title: string, id: string) => ({ title, link: `/#${id}` });

const { SERVICES, EVENTS, REVIEWS, CONTACT_US } = SECTION_CONSTANTS;

const NAV_LINKS = [
	getLink("Lorem Ipsum", ""),
	getLink("Services", SERVICES.ID),
	getLink("Events", EVENTS.ID),
	getLink("Reviews", REVIEWS.ID),
	getLink("Contact us", CONTACT_US.ID),
] as const;

const SECTION_IDS = NAV_LINKS.map(({ link }) => link.replace("/#", ""));

export { NAV_LINKS, SECTION_IDS };
