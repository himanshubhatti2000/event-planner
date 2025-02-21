"use client";
import { NAV_LINKS, SECTION_IDS } from "@/constants/nav";
import useActiveSection from "@/hooks/useVisibleSection";
import type React from "react";
import { MenuItem } from "./MenuItem";
import { StyledUl } from "./styled";

const variants = {
	open: {
		transition: { staggerChildren: 0.02, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.02, staggerDirection: -1 },
	},
};

interface NavigationProps {
	onMenuItemClick?: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({ onMenuItemClick }) => {
	const activeSection = useActiveSection(SECTION_IDS);

	return (
		<StyledUl variants={variants}>
			{NAV_LINKS.map(({ title, link }) => {
				const isActive = link === `/#${activeSection}`;
				return (
					<MenuItem
						key={link}
						title={title}
						link={link}
						isActive={isActive}
						onMenuItemClick={onMenuItemClick}
					/>
				);
			})}
		</StyledUl>
	);
};
