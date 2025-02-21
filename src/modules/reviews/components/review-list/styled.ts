"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ScrollContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	overflow: "hidden",
	width: "100%",
	position: "relative",
}));

export const ScrollingList = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	whiteSpace: "nowrap",
	animation: "scroll-left 40s linear infinite",

	"@keyframes scroll-left": {
		"0%": { transform: "translateX(100%)" },
		"100%": { transform: "translateX(-100%)" },
	},
}));
