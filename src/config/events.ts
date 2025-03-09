interface Event {
	id: number;
	title: string;
	imageSrc: string;
}

const EVENTS: Event[] = [
	{ id: 1, title: "Birthday Parties", imageSrc: "/events/birthday.webp" },
	{ id: 2, title: "Gender Reveal", imageSrc: "/events/gender_reveal.webp" },
	{ id: 3, title: "Baby Showers", imageSrc: "/events/baby_shower.webp" },
	{ id: 4, title: "Bridal Showers", imageSrc: "/events/bridal_shower.webp" },
	{
		id: 5,
		title: "Anniversary Celebrations",
		imageSrc: "/events/anniversary.webp",
	},
	{ id: 6, title: "Graduation Parties", imageSrc: "/events/graduation.webp" },
	{ id: 7, title: "Holiday Celebrations", imageSrc: "/events/holiday.webp" },
	{ id: 8, title: "Corporate Events", imageSrc: "/events/corporate.webp" },
	{ id: 9, title: "Themed Parties", imageSrc: "/events/themed_party.webp" },
	{
		id: 10,
		title: "Proms and Homecomings",
		imageSrc: "/events/prom_homecoming.webp",
	},
	{
		id: 11,
		title: "Wedding Proposals Set Up",
		imageSrc: "/events/wedding_proposal.webp",
	},
];

export { EVENTS };
