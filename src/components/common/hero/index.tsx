import { StyledLink } from "@/styled";
import React from "react";
import CustomWrapper from "../custom-wrapper";
import {
	HeroContainer,
	StyledButton,
	TextSection,
	TextTypography,
} from "./styled";

interface HeroProps {
	headline: string;
	image?: string;
	buttonLabel: string;
	buttonUrl: string;
}

const Hero = ({ headline, image, buttonLabel, buttonUrl }: HeroProps) => {
	return (
		<HeroContainer imageUrl={image}>
			<CustomWrapper>
				<TextSection>
					<TextTypography variant="h2">{headline}</TextTypography>
					<StyledLink href={buttonUrl}>
						<StyledButton size="large" variant="outlined">
							{buttonLabel}
						</StyledButton>
					</StyledLink>
				</TextSection>
			</CustomWrapper>
		</HeroContainer>
	);
};

export default Hero;
