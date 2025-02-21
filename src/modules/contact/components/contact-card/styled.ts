"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(2),
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[2],
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(2),
}));

export const CardIcon = styled("div")(({ theme }) => ({
	fontSize: theme.spacing(4),
	color: theme.palette.primary.main,
}));

export const ContactLink = styled("a")({
	textDecoration: "none",
	color: "inherit",
});
