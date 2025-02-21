"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { EVENT_CARD_CLASSES } from "../../constants";

const { IMAGE_WRAPPER, TITLE_WRAPPER, TITLE } = EVENT_CARD_CLASSES;
export const CardWrapper = styled(Box)(({ theme }) => ({
	boxShadow: theme.shadows[3],
	backgroundColor: theme.palette.background.paper,
	height: "100%",
	position: "relative",
	cursor: "pointer",
	transition: "all 2s ease",

	[`& .${IMAGE_WRAPPER}`]: {
		position: "relative",
		width: "100%",
		height: theme.spacing(40),
		overflow: "hidden",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			transition: "transform 0.3s ease, filter 0.3s ease",
			filter: "brightness(80%)",

			"&:hover": {
				transform: "scale(1.05)",
				filter: "brightness(100%)",
			},
		},
		[theme.breakpoints.down("md")]: {
			height: theme.spacing(28),
		},
	},

	[`& .${TITLE_WRAPPER}`]: {
		position: "absolute",
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		left: 0,
		right: 0,
		transition: "all 0.3s ease",
	},

	[`& .${TITLE}`]: {
		fontFamily: "raleway",
		fontWeight: 500,
		margin: theme.spacing(2),
		transition: "all 0.3s ease",
		fontSize: theme.spacing(2.5),

		[theme.breakpoints.down("sm")]: {
			fontSize: theme.spacing(2),
		},
	},

	"&:hover": {
		[`& .${IMAGE_WRAPPER}`]: {
			"& img": {
				transform: "scale(1.05)",
				filter: "brightness(100%)",
			},
		},
		[`& .${TITLE_WRAPPER}`]: {
			background: "rgba(255, 255, 255)",
		},

		[`& .${TITLE}`]: {
			fontWeight: 800,
		},
	},
}));
