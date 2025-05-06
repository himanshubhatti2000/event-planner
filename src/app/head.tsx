import { META_DATA } from "@/config";

export default function Head() {
	return (
		<>
			<meta property="og:title" content={META_DATA.TITLE} />
			<meta property="og:description" content={META_DATA.DESCRIPTION} />
			<meta
				property="og:image"
				content="https://event-planner-navy-iota.vercel.app/og.jpg"
			/>
			<meta property="og:url" content={META_DATA.URL} />
			<meta property="og:type" content={META_DATA.TYPE} />
			<meta name="twitter:card" content={META_DATA.CARD} />
			<meta name="twitter:title" content={META_DATA.TITLE} />
			<meta name="twitter:description" content={META_DATA.DESCRIPTION} />
			<meta name="twitter:image" content={META_DATA.IMG_URL} />
		</>
	);
}
