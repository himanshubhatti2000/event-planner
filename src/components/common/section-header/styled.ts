"use client";
import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
	display: "flex",
	fontFamily: "Raleway",
	color: theme.palette.text.primary,
	marginBottom: theme.spacing(3.5),
	fontSize: theme.spacing(8),

	[theme.breakpoints.down("sm")]: {
		fontSize: theme.spacing(5),
		marginBottom: theme.spacing(2.5),
	},
}));

export { Title };
