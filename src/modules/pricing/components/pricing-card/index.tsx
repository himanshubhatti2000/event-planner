"use client";
import LightButton from "@/components/common/light-button";
import OnViewAnimation from "@/components/common/on-view-animation";
import { ANIMATION_TEXT_CONFIG } from "@/config/animation";
import { LINKS } from "@/constants";
import type { PricingType } from "../../@types";
import {
	ButtonDividerContainer,
	ButtonLink,
	PriceContainer,
	StyledDivider,
	Subtitle,
	Title,
} from "./styled";

interface PricingCardProps extends PricingType {}
const { INITIAL, ANIMATE, TRANSITION } = ANIMATION_TEXT_CONFIG;
const PricingCard: React.FC<PricingCardProps> = ({ title, subtitle }) => {
	return (
		<PriceContainer>
			<OnViewAnimation
				initial={INITIAL}
				animate={ANIMATE}
				transition={TRANSITION}
			>
				<Title variant="h6">{title}</Title>
			</OnViewAnimation>
			<OnViewAnimation
				initial={INITIAL}
				animate={ANIMATE}
				transition={TRANSITION}
			>
				<Subtitle variant="subtitle1">{subtitle}</Subtitle>
			</OnViewAnimation>

			<ButtonDividerContainer>
				<ButtonLink href={LINKS.CONTACTS.link}>
					<LightButton>{LINKS.CONTACTS.title}</LightButton>
				</ButtonLink>

				<StyledDivider />
			</ButtonDividerContainer>
		</PriceContainer>
	);
};

export default PricingCard;
