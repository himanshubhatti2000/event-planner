import type { FooterConfig } from "@/@types/footer";
import { StyledLink } from "@/styled";
import { Tooltip, Typography } from "@mui/material";
import type React from "react";
import Logo from "../logo";
import {
	BottomContainer,
	FlexContainer,
	FooterDivider,
	LinksContainer,
	SocialMediaLinkContainer,
	Wrapper,
} from "./styled";

const Footer: React.FC<FooterConfig> = ({
	links,
	copyright,
	socialMediaLinks,
}) => {
	return (
		<Wrapper>
			<FlexContainer>
				<Logo />
				<LinksContainer>
					{links.map((link) => (
						<StyledLink href={link.href} key={link.text}>
							{link.text}
						</StyledLink>
					))}
				</LinksContainer>
			</FlexContainer>

			<FooterDivider />
			<BottomContainer>
				<Typography variant="body2">
					&copy; {copyright.year}
					<StyledLink href={copyright.href}>{copyright.text}</StyledLink>
				</Typography>
				<SocialMediaLinkContainer>
					{socialMediaLinks.map(({ href, title, icon: Icon }) => (
						<StyledLink href={href} key={title} target="_blank">
							<Tooltip title={title}>
								<Icon />
							</Tooltip>
						</StyledLink>
					))}
				</SocialMediaLinkContainer>
			</BottomContainer>
		</Wrapper>
	);
};

export default Footer;
