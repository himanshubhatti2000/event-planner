import type { ImageObjType } from "@/@types";

const images: ImageObjType = {
	wedding: {
		id: "wedding",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/wedding.webp",
	},
	minimal: {
		id: "minimal",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/minimal.webp",
	},
	decoration: {
		id: "decoration",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/decoration.webp",
	},
	"kids-party": {
		id: "kids-party",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/kids-party.webp",
	},
	birthday: {
		id: "birthday",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/birthday.webp",
	},
	couple: {
		id: "couple",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/couple.webp",
	},
	event: {
		id: "event",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/event.webp",
	},
	party: {
		id: "party",
		format: "webp",
		blurDataUrl: "/gallery/blur.webp",
		url: "/gallery/party.webp",
	},
} as const;

export { images };
