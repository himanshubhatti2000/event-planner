interface Event {
	id: number;
	title: string;
	imageSrc: string;
}

const EVENTS: Event[] = [
	{ id: 1, title: "Birthday Parties", imageSrc: "/events/birthday.jpg" },
	{ id: 2, title: "Gender Reveal", imageSrc: "/events/gender_reveal.jpg" },
	{ id: 3, title: "Baby Showers", imageSrc: "/events/baby_shower.jpg" },
	{ id: 4, title: "Bridal Showers", imageSrc: "/events/bridal_shower.jpg" },
	{
		id: 5,
		title: "Anniversary Celebrations",
		imageSrc: "/events/anniversary.jpg",
	},
	{ id: 6, title: "Graduation Parties", imageSrc: "/events/graduation.jpg" },
	{ id: 7, title: "Holiday Celebrations", imageSrc: "/events/holiday.jpg" },
	{ id: 8, title: "Corporate Events", imageSrc: "/events/corporate.jpg" },
	{ id: 9, title: "Themed Parties", imageSrc: "/events/themed_party.jpg" },
	{
		id: 10,
		title: "Proms and Homecomings",
		imageSrc: "/events/prom_homecoming.jpg",
	},
	{
		id: 11,
		title: "Wedding Proposals Set Up",
		imageSrc: "/events/wedding_proposal.jpg",
	},
];

export { EVENTS };
