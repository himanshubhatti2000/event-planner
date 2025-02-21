"use client";
import { NAV_LINKS, SECTION_IDS } from "@/constants/nav";
import { Sidebar } from "@/modules/side-bar";
import { StyledLink } from "@/styled";
import { Typography, styled } from "@mui/material";
import React from "react";
import useActiveSection from "../../hooks/useVisibleSection";
import Logo from "../common/logo";

const StyledHeader = styled("header")(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	alignItems: "center",
	minHeight: "50px",
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	zIndex: 2,
	background: "white",
	padding: 2,
	boxShadow: theme.shadows[6],
    
	[theme.breakpoints.down("md")]: {
		flexDirection: "row-reverse",
		justifyContent: "space-between",
	},
}));

const StyledNav = styled("nav")(({ theme }) => ({
	paddingBottom: theme.spacing(1),
	display: "flex",
	gap: theme.spacing(1),

	[theme.breakpoints.down("md")]: {
		display: "none",
	},
}));

const SideContainer = styled("div")(({ theme }) => ({
	position: "fixed",
	height: "100%",
	left: 0,
	top: 0,
	bottom: 0,
	background: "red",
	zIndex: 9999,
	[theme.breakpoints.up("md")]: {
		display: "none",
	},
}));

const Nav = () => {
	const activeSection = useActiveSection(SECTION_IDS);

	return (
		<>
			<StyledHeader>
				<Logo />
				<StyledNav>
					{NAV_LINKS.map(({ link, title }) => (
						<StyledLink key={link} href={link} isActive={link === `/#${activeSection}`}>
							{title}
						</StyledLink>
					))}
				</StyledNav>
			</StyledHeader>
			<SideContainer>
				<Sidebar />
			</SideContainer>
		</>
	);
};

export default Nav;
