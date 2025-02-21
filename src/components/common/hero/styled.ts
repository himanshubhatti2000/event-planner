"use client";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

interface HeroContainerProps {
	imageUrl?: string;
}
export const HeroContainer = styled("div")<HeroContainerProps>(
	({ theme, imageUrl }) => ({
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		minHeight: "94vh",
		backgroundImage: `url('${imageUrl}')`,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		margin: theme.spacing(0, 2),
		padding: theme.spacing(12, 0),
		backgroundAttachment: "fixed",

		"::before": {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			content: '""',
			background: "rgba(0, 0, 0, 0.4)",
			zIndex: 0,
			[theme.breakpoints.down("md")]: {
				background: "rgba(0, 0, 0, 0.5)",
			},
		},
		[theme.breakpoints.down("md")]: {
			margin: theme.spacing(0, 2),
		},
	}),
);

export const TextSection = styled("div")(({ theme }) => ({
	flex: 2,
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	textAlign: "center",
	position: "relative",
	transition: "opacity 1s ease, transform 1s ease",
	animation: "slideIn 1s forwards",

	"@keyframes slideIn": {
		"0%": {
			opacity: 0.2,
			transform: "translateY(400px)",
		},
		"100%": {
			opacity: 1,
			transform: "translateY(0)",
		},
	},
}));

export const TextTypography = styled(Typography)(({ theme }) => ({
	fontFamily: "Raleway",
	color: theme.palette.grey[50],

	[theme.breakpoints.down("md")]: {
		fontSize: theme.spacing(5),
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: theme.spacing(3.5),
	},
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: 16,
	borderColor: theme.palette.grey[50],
	color: theme.palette.grey[50],
}));
