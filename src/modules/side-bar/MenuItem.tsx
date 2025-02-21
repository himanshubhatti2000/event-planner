import { StyledLink } from "@/styled";
import type React from "react";
import type { NavItem } from "./@types";
import { StyledLi } from "./styled";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export interface MenuItemPops {
	title: string;
	link: string;
	isActive: boolean;
	onMenuItemClick?: () => void;
}
export const MenuItem: React.FC<MenuItemPops> = ({
	title,
	link,
	isActive,
	onMenuItemClick = () => {},
}) => {
	return (
		<StyledLi
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<StyledLink href={link} isActive={isActive} onClick={onMenuItemClick}>
				{title}
			</StyledLink>
		</StyledLi>
	);
};
