"use client";
import { Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

const StyledGrid = styled(Grid)(({ theme }) => ({
	padding: theme.spacing(18, 0),
}));

const Para = styled(Typography)(({ theme }) => ({
	display: "flex",
	gap: theme.spacing(4),
	color: theme.palette.text.secondary,
	fontWeight: 300,
	lineHeight: 2,
}));

export { StyledGrid, Para };
