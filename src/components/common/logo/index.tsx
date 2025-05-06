"use client";
import { StyledLink } from "@/styled";
import React from "react";
import { StyledLogo } from "./styled";

const Logo = () => {
	return (
		<StyledLink href="/">
			<StyledLogo variant="h4" fontWeight={600}>
				Dream Decor
			</StyledLogo>
		</StyledLink>
	);
};

export default Logo;
