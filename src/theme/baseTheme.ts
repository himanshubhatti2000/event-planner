"use client";
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
	palette: {
		primary: {
			main: "#19b5bc",
			light: "#AEE5E7",
			dark: "#117e83",
		},
		secondary: {
			light: "#ffece6",
			main: "#ffddd2",
			dark: "#e29578",
		},
		info: {
			main: "#2196F3",
			light: "#c9e5fb ",
			dark: "#0B79D0",
			contrastText: "#FFFFFF",
		},
		warning: {
			main: "#FFB020",
			light: "#ffd281 ",
			dark: "#B27B16",
			contrastText: "#FFFFFF",
		},
		background: {
			primary: "#19b5bc",
			secondary: "#8CDADD",
			tertiary: "#8CDADD",
		},
	},
	shadows: [
		"none",
		"0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
		"0px 1px 2px rgba(100, 116, 139, 0.12)",
		"0px 1px 4px rgba(100, 116, 139, 0.12)",
		"0px 1px 5px rgba(100, 116, 139, 0.12)",
		"0px 1px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 6px rgba(100, 116, 139, 0.12)",
		"0px 3px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
		"0px 5px 12px rgba(100, 116, 139, 0.12)",
		"0px 5px 14px rgba(100, 116, 139, 0.12)",
		"0px 5px 15px rgba(100, 116, 139, 0.12)",
		"0px 6px 15px rgba(100, 116, 139, 0.12)",
		"0px 7px 15px rgba(100, 116, 139, 0.12)",
		"0px 8px 15px rgba(100, 116, 139, 0.12)",
		"0px 9px 15px rgba(100, 116, 139, 0.12)",
		"0px 10px 15px rgba(100, 116, 139, 0.12)",
		"0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
		"0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
	],
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "outlined" },
					style: {
						borderRadius: "0px",
					},
				},
			],
		},
	},
});

export default baseTheme;
