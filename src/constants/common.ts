const getSectionInfo = (ID: string, TITLE: string) => ({ ID, TITLE });

const SECTION_CONSTANTS = {
	LOREM_IPSUM: getSectionInfo("", ""),
	SERVICES: getSectionInfo("services", "Service List"),
	EVENTS: getSectionInfo("events", "Event List"),
	REVIEWS: getSectionInfo("reviews", "Reviews"),
	CONTACT_US: getSectionInfo("contact-us", "Contact us"),
};

export { SECTION_CONSTANTS };
