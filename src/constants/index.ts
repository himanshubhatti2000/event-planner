import { SECTION_CONSTANTS } from "./common";

const getTitleLink = (title: string, link: string, isSection?: boolean) => ({
	title,
	link: isSection ? `/#${link}` : `/${link}`,
});

const { SERVICES, EVENTS, CONTACT_US } = SECTION_CONSTANTS;

const LINKS = {
	SERVICES: getTitleLink("Services", SERVICES.ID, true),
	EVENTS: getTitleLink("Events", EVENTS.ID, true),
	CONTACTS: getTitleLink("Contact us", CONTACT_US.ID, true),
	PRIVACY_POLICY: getTitleLink("Privacy Policy", "privacy-policy"),
	ABOUT_US: getTitleLink("About us", "about-us"),
};

const NAV_LINKS = [LINKS.SERVICES, LINKS.EVENTS, LINKS.CONTACTS] as const;

const SECTION_IDS = NAV_LINKS.map(({ link }) => link.replace("/#", ""));

export { NAV_LINKS, SECTION_IDS, LINKS };
