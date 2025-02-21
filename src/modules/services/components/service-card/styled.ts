"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SERVICE_CARD_CLASSES } from "../../constants";

const { IMAGE_WRAPPER, TITLE_WRAPPER, TITLE } = SERVICE_CARD_CLASSES;
export const CardWrapper = styled(Box)(({ theme }) => ({
	boxShadow: theme.shadows[3],
	backgroundColor: theme.palette.background.paper,
	height: "100%",
	cursor: "pointer",
	transition: "all 2s ease",
	display: "flex",

	[`& .${IMAGE_WRAPPER}`]: {
		position: "relative",
		height: theme.spacing(14),
		width: theme.spacing(14),
		overflow: "hidden",
		flexShrink: 0,

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
			height: theme.spacing(12),
			width: theme.spacing(12),
		},
	},

	[`& .${TITLE_WRAPPER}`]: {
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		transition: "all 0.3s ease",
	},

	[`& .${TITLE}`]: {
		fontFamily: "raleway",
		fontWeight: 500,
		margin: theme.spacing(2),
		transition: "all 0.3s ease",
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
