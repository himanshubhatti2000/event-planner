import { PiEnvelopeSimple, PiPhone } from "react-icons/pi";

export const CONTACT_INFO = [
	{
		title: "Email",
		value: "dreamdecor791@gmail.com",
		icon: PiEnvelopeSimple,
		href: "mailto: dreamdecor791@gmail.com",
	},
	{
		title: "Pooja Thakur's Phone Number",
		value: "902-514-1896",
		icon: PiPhone,
		href: "tel: 902-514-1896",
	},
	{
		title: "Divya Jyoti Ahluwalia's Phone Number",
		value: "902-514-0348",
		icon: PiPhone,
		href: "tel: 902-514-0348",
	},
	{
		title: "Sahil Manhas's Phone Number",
		value: "902-514-9997",
		icon: PiPhone,
		href: "tel: 902-514-9997",
	},
];

const MAP_COORDINATES = {
	LAT: 44.3771144,
	LNG: -64.5249775,
};

const getMapUrl = (lat: number, lng: number): string => {
	const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
	return isIOS
		? `http://maps.apple.com/?q=${lat},${lng}`
		: `https://www.google.com/maps?q=${lat},${lng}`;
};

export { MAP_COORDINATES, getMapUrl };
