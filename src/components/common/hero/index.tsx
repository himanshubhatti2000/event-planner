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
	subheadline: string;
	image?: string;
	buttonLabel: string;
	buttonUrl: string;
	scrollAnchorId?: string;
}

const Hero = ({
	headline,
	subheadline,
	image,
	buttonLabel,
	buttonUrl,
	scrollAnchorId,
}: HeroProps) => {
	return (
		<HeroContainer imageUrl={image}>
			<CustomWrapper>
				<TextSection>
					<TextTypography variant="h2">{headline}</TextTypography>
					<StyledButton size="large" variant="outlined">
						{buttonLabel}
					</StyledButton>
				</TextSection>
			</CustomWrapper>
		</HeroContainer>
	);
};

export default Hero;
