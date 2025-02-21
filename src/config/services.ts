interface Service {
	id: number;
	title: string;
	imageSrc: string;
}

export const Services: Service[] = [
	{ id: 1, title: "Balloon Decorations", imageSrc: "/services/balloon.jpg" },
	{ id: 2, title: "Theme-based Decor", imageSrc: "/services/theme.jpg" },
	{ id: 3, title: "Table Centrepieces", imageSrc: "/services/table.jpg" },
	{ id: 4, title: "Backdrops & Arches", imageSrc: "/services/backdrops.jpg" },
	{
		id: 5,
		title: "Artificial Floral Arrangements",
		imageSrc: "/services/artificial_fa.jpg",
	},
	{
		id: 6,
		title: "Lighting Design",
		imageSrc: "/services/lighting_design.jpg",
	},
	{
		id: 7,
		title: "Table Linens & Chair Covers",
		imageSrc: "/services/table_chair_covers.jpg",
	},
	{
		id: 8,
		title: "Custom Signage & Banners",
		imageSrc: "/services/custom_signage_banners.jpg",
	},
	{
		id: 9,
		title: "Props & Set Pieces",
		imageSrc: "/services/props_set_pieces.jpg",
	},
];
