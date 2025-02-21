"use client";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(4, 0),
}));

const FlexContainer = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	gap: theme.spacing(4),
}));

const BottomContainer = styled("div")(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	gap: theme.spacing(4),

	"& svg": {
		fill: theme.palette.grey[600],
		gap: theme.spacing(4),
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));

const LinksContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(2),

	"& a": {
		color: theme.palette.text.primary,

		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

const SocialMediaLinkContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(2),

	"& a": {
		// fill: theme.palette.text.primary,
		color: "red",
		fill: "red",

		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
	margin: theme.spacing(3, 0),
}));

export {
	Wrapper,
	LinksContainer,
	FooterDivider,
	FlexContainer,
	BottomContainer,
	SocialMediaLinkContainer,
};
