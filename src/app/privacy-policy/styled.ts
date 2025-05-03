"use client";
import { ListItemIcon, Typography } from "@mui/material";
import { styled } from "@mui/material";

// Outer wrapper for the whole page content
export const ContentWrapper = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(3),
}));

// Box for each section (Information, How we use, etc.)
export const SectionBox = styled("div")(({ theme }) => ({
	marginTop: theme.spacing(2),
}));

// Section title (with icon + text)
export const SectionTitle = styled(Typography)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	fontWeight: 600,
}));

// The big section icon
export const StyledSectionIcon = styled("div")(({ theme }) => ({
	marginRight: theme.spacing(1),
	color: theme.palette.primary.main,
	fontSize: 24,
	display: "flex",
	alignItems: "center",
}));

// List item icon (bullet icon)
export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
	minWidth: 32,
}));

// Icon inside list item
export const StyledItemIcon = styled("div")(({ theme }) => ({
	color: theme.palette.secondary.dark,
	fontSize: 18,
	display: "flex",
	alignItems: "center",
}));
