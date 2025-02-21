"use client";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import type React from "react";
import { createContext, useContext, useMemo, useState } from "react";
import darkTheme from "../theme/darkTheme";
import lightTheme from "../theme/lightTheme";

interface ThemeContextProps {
	toggleTheme: () => void;
	mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const theme = useMemo(
		() => (mode === "light" ? lightTheme : darkTheme),
		[mode],
	);

	const toggleTheme = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, mode }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
