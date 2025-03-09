"use client";
import { StyledLink } from "@/styled";
import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { StyledLogo } from "./styled";

const Logo = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<StyledLink href="/">
			<StyledLogo variant="h4" fontWeight={600}>
				{isSmallScreen ? "DDecor" : "Dream Decor"}
			</StyledLogo>
		</StyledLink>
	);
};

export default Logo;
