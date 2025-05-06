"use client";
import { Typography, styled } from "@mui/material";

export const StyledLogo = styled(Typography)(({ theme }) => ({
	color: theme.palette.grey[800],
	fontFamily: "Raleway",
	fontSize: theme.typography.pxToRem(36),

	[theme.breakpoints.down("md")]: {
		fontSize: theme.typography.pxToRem(24),
	},
}));
