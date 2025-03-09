"use client";
import { styled } from "@mui/material";
import Link from "next/link";

interface StyledLinkProps {
	isActive?: boolean;
}

const StyledLink = styled(Link, {
	shouldForwardProp: (prop) => prop !== "isActive",
})<StyledLinkProps>(({ theme, isActive }) => ({
	textDecoration: "none",
	fontWeight: isActive ? 700 : 500,
	color: isActive ? theme.palette.primary.main : theme.palette.text.primary,

	"&:hover": {
		color: theme.palette.primary.main,
	},
}));

const NavLink = styled(StyledLink)(({ theme }) => ({
	transition: "color 0.3s ease",
	fontSize: theme.spacing(1.8),
}));

export { NavLink, StyledLink };
