import {
	ANIMATION_HEADER_CONFIG,
	ANIMATION_TEXT_CONFIG,
} from "@/config/animation";
import React, { type ReactNode } from "react";
import OnViewAnimation from "../on-view-animation";
import { Title } from "./styled";

interface SectionHeaderProps {
	children: ReactNode;
}
const { INITIAL, ANIMATE, TRANSITION } = ANIMATION_HEADER_CONFIG;
const SectionHeader = ({ children }: SectionHeaderProps) => {
	return (
		<OnViewAnimation
			initial={INITIAL}
			animate={ANIMATE}
			transition={TRANSITION}
		>
			<Title variant="h2">{children}</Title>
		</OnViewAnimation>
	);
};

export default SectionHeader;
