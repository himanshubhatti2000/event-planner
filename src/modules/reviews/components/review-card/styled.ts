"use client";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PiStar, PiStarDuotone } from "react-icons/pi";

const CardWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100%",
	padding: theme.spacing(2),
	boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	marginBottom: theme.spacing(2),
	background: "#ffffff",
}));

const CardImage = styled("div")(({ theme }) => ({
	position: "relative",
	width: theme.spacing(8),
	height: theme.spacing(8),
	//borderRadius: '50%',
	overflow: "hidden",
	flexShrink: 0,
	border: `${theme.spacing(0.5)} solid ${theme.palette.grey[300]}`,
}));

const CardContent = styled("div")(({ theme }) => ({
	display: "flex",

	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

const CardName = styled("h3")(() => ({
	margin: 0,
	fontSize: "18px",
}));

const Name = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontWeight: 800,
	fontFamily: "Raleway",
}));

const ReviewText = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	marginTop: theme.spacing(2),
	fontWeight: 300,

	lineHeight: 1.75, // Controls the height of each line
	display: "-webkit-box", // Enables multi-line ellipsis
	WebkitBoxOrient: "vertical", // Required for truncating after multiple lines
	WebkitLineClamp: 8, // Number of lines to display (change based on your needs)
	overflow: "hidden", // Hides overflowed content
	textOverflow: "ellipsis", // Forces ellipsis
	whiteSpace: "normal", // Allows wrapping to multiple lines

	[theme.breakpoints.up("md")]: {
		marginLeft: theme.spacing(10),
	},
}));

const StarFill = styled(PiStarDuotone)(({ theme }) => ({
	fill: theme.palette.primary.main,
}));

const Star = styled(PiStar)(({ theme }) => ({
	fill: theme.palette.grey[300],
}));

export {
	CardWrapper,
	CardImage,
	CardContent,
	CardName,
	Name,
	ReviewText,
	Star,
	StarFill,
};
