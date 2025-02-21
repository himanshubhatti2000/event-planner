"use client";
import { styled } from "@mui/material";

interface WrapperProps {
	variant?: "primary" | "secondary";
	isPaddingY?: boolean;
	id?: string;
}

export const Wrapper = styled("div")<WrapperProps>(
	({ theme, variant, isPaddingY }) => ({
		display: "flex",
		justifyContent: "center",
		padding: theme.spacing(0, 2),
		paddingTop: isPaddingY ? theme.spacing(8) : "unset",
		paddingBottom: isPaddingY ? theme.spacing(12) : "unset",
		backgroundColor: variant === "secondary" ? theme.palette.grey[50] : "unset",
	}),
);

export const Content = styled("div")(({ theme }) => ({
	maxWidth: 1200,
	width: "100%",
}));
