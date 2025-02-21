import { ON_VIEW_ANIMATION_MODES } from "@/constants/animation";

const ANIMATION_DEFAULT_CONFIG = {
	INITIAL: { opacity: 0, y: 30 },
	ANIMATE: { opacity: 1, y: 0 },
	TRANSITION: { duration: 0.6, ease: "easeOut" },
	THRESHOLD: 0.2,
	MODE: ON_VIEW_ANIMATION_MODES.ONLY_FIRST_TIME,
};

const ANIMATION_TEXT_COVER_CONFIG = {
	INITIAL: { opacity: 0 },
	ANIMATE: { opacity: 1 },
	TRANSITION: { duration: 0.2, ease: "easeOut", delay: 0.4 },
};

const ANIMATION_HEADER_CONFIG = {
	INITIAL: { opacity: 0, y: 15 },
	ANIMATE: { opacity: 1, y: 0 },
	TRANSITION: { duration: 0.3, ease: "easeOut", delay: 0.4 },
};

const ANIMATION_TEXT_CONFIG = {
	INITIAL: { opacity: 0, y: 15 },
	ANIMATE: { opacity: 1, y: 0 },
	TRANSITION: { duration: 0.4, ease: "easeOut", delay: 0.6 },
};

export {
	ANIMATION_DEFAULT_CONFIG,
	ANIMATION_TEXT_CONFIG,
	ANIMATION_TEXT_COVER_CONFIG,
	ANIMATION_HEADER_CONFIG,
};
