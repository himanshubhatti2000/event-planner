"use client";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const ButtonWrapper = styled(Link)(({ theme }) => ({
	display: "inline-block",
	fontWeight: 400,
	textAlign: "center",
	whiteSpace: "nowrap",
	verticalAlign: "middle",
	userSelect: "none",
	padding: "18px 28px",
	fontSize: "18px",
	lineHeight: 1,
	borderRadius: "10px",
	color: "#fff",
	cursor: "pointer",
	zIndex: 5,
	transition: "all 0.4s ease-in-out",
	border: "2px solid transparent",
	backgroundColor: "#37C2CC",
	overflow: "hidden",
	textDecoration: "none",

	"&:hover": {
		backgroundColor: "#2aa0a7",
	},
}));
