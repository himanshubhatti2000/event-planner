"use client";
import { styled } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import type React from "react";
import { useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Background } from "./styled";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(20px at 35px 27px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const StyledNav = styled(motion.nav)(({ theme }) => ({}));

export const Sidebar: React.FC = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef<HTMLElement>(null);

	return (
		<StyledNav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			ref={containerRef}
		>
			<Background variants={sidebar} />
			{isOpen && <Navigation onMenuItemClick={toggleOpen} />}
			<MenuToggle toggle={() => toggleOpen()} />
		</StyledNav>
	);
};
