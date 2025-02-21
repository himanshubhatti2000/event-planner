"use client";
import { Masonry } from "@mui/lab";
import { styled } from "@mui/material";

interface VariantProps {
	variant?: "small" | "normal";
}

const Wrapper = styled("div", {
	shouldForwardProp: (prop) => prop !== "variant",
})<VariantProps>(({ theme, variant }) => ({
	overflow: "hidden",
	lineHeight: 0,
}));

const StyledMasonry = styled(Masonry, {
	shouldForwardProp: (prop) => prop !== "variant",
})<VariantProps>(({ theme, variant }) => ({
	width: "auto",
}));

const Item = styled("div")({
	position: "relative",
	overflow: "hidden",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,

	"& img": {
		cursor: "zoom-in",
		width: "100%",
		height: "auto",
		transition: "transform 0.3s ease, filter 0.3s ease",
		filter: "brightness(90%)",

		"&:hover": {
			transform: "scale(1.05)",
			filter: "brightness(100%)",
		},
	},
});

export { Wrapper, Item, StyledMasonry };
