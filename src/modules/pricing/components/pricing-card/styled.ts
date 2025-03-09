"use client";
import LightButton from "@/components/common/light-button";
import { StyledLink } from "@/styled";
import { Box, Divider, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PiCheckCircleDuotone } from "react-icons/pi";

interface PriceContainerProps {
	highlight?: boolean;
}

export const PriceContainer = styled("div", {
	shouldForwardProp: (prop) => prop !== "highlight",
})<PriceContainerProps>(({ theme, highlight }) => {
	return {
		overflow: "hidden",
		backdropFilter: "blur(40px)",
		display: "flex",
		flexDirection: "column",
		marginBottom: "20px",
		height: "100%",
		padding: theme.spacing(2, 4),

		"& svg": {
			color: highlight
				? theme.palette.warning.dark
				: theme.palette.primary.main,
			flexShrink: 0,
		},

		"&:hover": {
			boxShadow: theme.shadows[20],
		},
	};
});

export const Title = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[200],
	fontSize: theme.spacing(6),
	fontWeight: 300,
	lineHeight: theme.spacing(6.5),

	[theme.breakpoints.down("md")]: {
		fontSize: theme.spacing(4.5),
		lineHeight: theme.spacing(5),
	},
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[400],
	marginTop: theme.spacing(3),
}));

export const StyledPointText = styled(Typography)(({ theme }) => ({
	fontWeight: 400,
}));

export const ButtonDividerContainer = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginTop: theme.spacing(4),
}));

export const ButtonLink = styled(StyledLink)(({ theme }) => ({
	flexShrink: 0,
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.grey[600],
	width: "100%",
}));
