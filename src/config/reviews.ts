import type { Review } from "@/modules/reviews/@types";

const REVIEWS: Review[] = [
	{
		imageSrc: "/person/1.jpg",
		imageAlt: "Reviewer 1",
		name: "John Doe",
		rating: 4,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nisl ac nulla lacinia rutrum a sed mi. Nulla rutrum malesuada rhoncus. ",
	},
	{
		imageSrc: "/person/2.jpg",
		imageAlt: "Reviewer 2",
		name: "Jane Smith",
		rating: 5,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nisl ac nulla lacinia rutrum a sed mi. Nulla rutrum malesuada rhoncus. In hac habitasse platea dictumst. Phasellus non quam id purus finibus pellentesque in id risus.",
	},
	{
		imageSrc: "/person/3.jpg",
		imageAlt: "Reviewer 3",
		name: "Bob Johnson",
		rating: 3,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nisl ac nulla lacinia rutrum a sed mi. Nulla rutrum malesuada rhoncus.",
	},
	{
		imageSrc: "/person/4.jpg",
		imageAlt: "Reviewer 4",
		name: "Bob Johnson",
		rating: 2,
		text: "Lorem ipsum dolor sit amet.",
	},
];

export { REVIEWS };
