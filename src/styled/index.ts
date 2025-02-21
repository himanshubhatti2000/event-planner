"use client";
import { styled } from "@mui/material";

interface StyledLinkProps {
	isActive: boolean;
}

const StyledLink = styled("a", {
	shouldForwardProp: (prop) => prop !== "isActive",
})<StyledLinkProps>(({ theme, isActive }) => ({
	textDecoration: "none",
	transition: "color 0.3s ease",
	fontSize: theme.spacing(1.8),
	fontWeight: isActive ? 700 : 500,
	color: isActive ? theme.palette.primary.main : theme.palette.text.primary,

	"&:hover": {
		color: theme.palette.primary.main,
	},
}));

export { StyledLink };
