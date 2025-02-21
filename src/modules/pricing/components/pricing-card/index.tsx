"use client";
import LightButton from "@/components/common/light-button";
import OnViewAnimation from "@/components/common/on-view-animation";
import { ANIMATION_TEXT_CONFIG } from "@/config/animation";
import { Box, Divider, Typography } from "@mui/material";
import type { PricingType } from "../../@types";
import {
	ButtonDividerContainer,
	PriceContainer,
	StyledButton,
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
				<StyledButton>Contact us</StyledButton>
				<StyledDivider />
			</ButtonDividerContainer>
		</PriceContainer>
	);
};

export default PricingCard;
